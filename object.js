//TODO update the view so you see the entire string/history
//TODO regex for calculating the string because you can't do the eval anymoreee...
//TODO equal sign operator needs to be finished..
var calculator = function(callback) {
    this.array = [];
    this.num1;
    this.num2;
    this.lastItem;
    this.callback = callback;
    this.allClear = function () { //AC is hit and it clears display and empties array
        $('#display').val('');
        this.arr = [];
    };

    //method that either updates the display, and the model, and desi
    this.addItem = function (value) {

        if (isNaN(parseFloat(value)) && value !== '(' && value !== ')') {//if not a number,return true

            switch (value) { //if it's not an operator but one of the below options..

                case '+/-':
                    if (this.array.length >= 1) {
                        console.log(this.array);
                        var objVal = this.array[(this.array.length) - 1].value;
                        objVal *= -1;
                        this.array[(this.array.length) - 1].value = objVal;
                        this.c(objVal);
                        switch (this.array.length) {
                            case 1:
                                this.num1 = objVal;
                                break;
                            case 3:
                                this.num2 = objVal;
                        }
                    }

                    break;
                case '%':
                    if (this.array.length >= 1) {
                        var objVal = this.array[(this.arr.length) - 1].value;
                        objVal /= 100;
                        this.arr[(this.array.length) - 1].value = objVal;
                        this.c(objVal);
                        switch (this.array.length) {
                            case 1:
                                this.num1 = objVal;
                                break;
                            case 3:
                                this.num2 = objVal;
                        }
                        break;
                    }
                case '.':
                    if (this.array.length >= 1) {
                        var objVal = this.array[(this.array.length) - 1].value;
                        var string = objVal.toString();
                        for (var i = 0; i < string.length; i++) {
                            if (string[i] === '.') {
                                return;
                            }
                        }
                        if (objVal % 1 === 0) {
                            var result = objVal + '.';
                            this.array[(this.array.length) - 1].value = result;
                            this.c(result);
                            if (this.array.length=== 1) {
                                this.num1 = result;
                            } else if (this.array.length === 3) {
                                this.num2 = result;

                            }
                        }
                    }
                    break;

                default:
                    var operator;
                        //if it's an operator..
                    switch(this.array.length){
                            case 1:
                                //if we hit an operator + - * value.. if theres a '(' in num1, and last letter is not '(' or ')' or 'operator'
                                if(this.num1[this.num1.length-1] === '('){
                                    return;
                                }
                                for(var v = 0; v<this.num1.length; v++){
                                    if( (this.num1[v] === '(') &&
                                        (this.num1[this.num1.length-1] !== '(') &&
                                        (this.num1[this.num1.length-1] !== ')') &&
                                        (this.num1[this.num1.length-1] !== '+') &&
                                        (this.num1[this.num1.length-1] !== '-') &&
                                        (this.num1[this.num1.length-1] !== 'x') &&
                                        (this.num1[this.num1.length-1] !== '/')
                                    )
                                    {
                                        //only concatonate if above is true
                                        this.num1 = this.num1 + value;  //then concat then return
                                        this.callback(this.num1);
                                        return;
                                    }

                                    if (this.num1[this.num1.length-1] === ')') {
                                        operator = this.createItem(value);   //otherwise.. create the operator object and stick it in arr[1]
                                        this.array.push(operator); //update model
                                        this.callback(value); //update view
                                        return;
                                    }

                                    if( (this.num1[v] === '(') &&   // if any letters are open paren..
                                        (this.num1[this.num1.length-1] === '+') ||
                                        (this.num1[this.num1.length-1] === '-') ||
                                        (this.num1[this.num1.length-1] === 'x') ||
                                        (this.num1[this.num1.length-1] === '/')
                                    )
                                    {
                                        var newString = this.num1.slice(0, this.num1.length-1);
                                        newString += value;
                                        this.num1 = newString;
                                        this.array[0] = this.num1;
                                        this.callback(this.num1);
                                        return;
                                    }
                                    //if(this.num1[v])
                                }
                                    operator = this.createItem(value);
                                    this.array.push(operator); //update model
                                    this.callback(value); //update view


                            //TODO need regex for parenth




                            break;

                        case 3:
                            operator = this.createItem(value);
                            var calculation = this.array[1].calculate( parseFloat(this.num1), parseFloat(this.num2) );
                            this.array = [];
                            this.array.push(calculation, operator);
                            this.num1 = calculation;
                            this.callback(this.num1);
                            var asdf = /[d]./;

                            break;
                    }
            }

        } else {//if not operator

            if(value === '(') { //scnearios for '('
                switch(this.array.length){
                    case 0:
                        this.num1 = value;
                        this.array.push(this.num1);
                        console.log(this.array);
                        this.callback('(');
                        break;

                    case 1:  //if last string val of num1 is any of below.. do nothing,
                        if( (this.num1[this.num1.length-1] === '(') ||
                            (this.num1[this.num1.length  - 1] === '+') ||
                            (this.num1[this.num1.length  - 1] === '-') ||
                            (this.num1[this.num1.length  - 1] === '/') ||
                            (this.num1[this.num1.length  - 1] === 'x') )
                        {
                            return;
                        }

                        //otherwise.. if last item is a number.. it's okay to open another parenths
                        this.num1 = this.num1 + '*' + value;
                        this.array[0] = this.num1;
                        this.callback(this.num1);
                        break;

                    case 3:
                        for(var y = 0; y<this.num2.length; y++){ //if cur index has a ')' do nothing,
                            if( (this.num1[x] === ')') || (this.num1[x] ==='(') ){
                                return;
                            }
                        }
                        this.num2 = this.num2 + '*' + value;
                        this.array[0] = this.num2;
                        this.callback(this.num2);
                        break;
                }
            }else if( value === ')' ){ //scenarios for ')'
                var openCount = 0;
                var closeCount = 0;
                switch(this.array.length) {
                    case 1:
                         //if last string val of num1 any one below.. do nothing
                                if (
                                    (this.num1[this.num1.length - 1] === '(') ||
                                    (this.num1[this.num1.length  - 1] === '+') ||
                                    (this.num1[this.num1.length  - 1] === '-') ||
                                    (this.num1[this.num1.length  - 1] === '/') ||
                                    (this.num1[this.num1.length  - 1] === 'x')
                                ) {
                                    return;
                                }
                        for(var o = 0; o<this.num1.length; o++){
                            if (this.num1[o] === '('){
                                openCount+=1;
                            }
                            if (this.num1[o] === ')'){
                                closeCount+=1;
                            }
                        }
                        if(openCount>closeCount){
                            this.num1 = this.num1 + value;
                            this.array[0] = this.num1;
                            this.callback(this.num1);
                            return;
                        }


                        //otherwise.. add it to the string and update view and model.
                        //this.num1 = this.num1 + value;
                        //this.array[0] = this.num1;
                        //this.callback(this.num1);

                        break;

                    case 3:

                        break;
                }

            }else{ //it's a number
                switch(this.array.length){
                    case 0:
                        this.num1 = value;      //define num1
                        this.array.push(this.num1);//push into array to update model,
                        this.callback(this.num1);//update view
                        break;

                    case 1:
                        // last letter is closed.. and we hit a number.. then ) * num
                        if(this.num1[this.num1.length-1]===')'){
                            this.num1 = this.num1 + '*' + value;
                            this.array[0] = this.num1;
                            this.callback(this.num1);
                            return;
                        }

                        this.num1 = this.num1 + value;  //still string, concat
                        this.array[0] = this.num1;
                        this.callback(this.num1);
                        break;

                    case 2:
                        this.num2 = value; //update num2
                        this.array.push(value);//update model
                        this.callback(this.num2);
                        break;
                }
            }

        }
    };

    //method that creates the item if it's not a number
    this.createItem = function(value){
        var curVal;
        switch(value){
            case '+':
                curVal = new plus();
                break;
            case '-':
                curVal = new minus();
                break;
            case 'x':
                curVal = new multiply();
                break;
            case '/':
                curVal = new divide();
                break;
            case '=':
                curVal = new equalSign();
                break;
        }
        return curVal;
    };
}; //calc prototype end



var plus = function(){
    this.calculate = function(num1, num2){
        var sum = num1 + num2;
        return sum;
    };
    this.history = function(){
        var hist = num1 + ' + ' + num2 + ' = ' + this.calculate(num1, num2);
        return hist;
    };
};

var minus = function(){
    this.calculate = function(num1, num2){
        var difference = num1 - num2;
        return difference;
    };
    this.history = function(num1, num2){
        var hist = num + ' - ' + num2 + ' = ' + this.calculate(num, num2);
        return hist;
    };
};

var multiply = function (){
    this.calculate = function(num1, num2){
        var product = num1 * num2;
        return product;
    };
    this.history = function(num1, num2) {
        var hist = num1 + ' x ' + num2 + ' = ' + this.calculate(num, num2);
    };
};

var divide = function(){
    this.calculate = function(num1, num2){
        var quotient = num1 / num;
    };
    this.history = function(num1, num2){
        var hist = num1 + ' / ' + num2 + ' = ' + this.calculate(num, num2);
    };
};
//
var equalSign = function(){
    this.calculate = function(arr, calc){
      //TODO finish this
    };
};

