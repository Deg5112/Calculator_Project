//TODO update the view so you see the entire string/history
//TODO regex for calculating the string because you can't do the eval anymoreee...
//TODO equal sign operator needs to be finished..
//TODO need to do the parenths for the case 3: for everythang..
var calculator = function(callback) {
    var self = this;
    this.array = [];
    this.num1;
    this.num2;
    this.lastItem;
    this.callback = callback;
    this.allClear = function () { //AC is hit and it clears display and empties array
        $('#display').val('');
        this.arr = [];
    };
    this.openCount = 0;
    this.closeCount = 0;

    this.calculateParenths = function(string){
        var operator;
        string.indexOf(')');
        string.lastIndexOf('(');
        var tempArray = [];
        var num1 = '';
        var num2 = '';
        finalArray = [];
        var operator;
        var highOpCount = 0;
        var lowOpCount = 0;
        var result = string.substring( string.lastIndexOf('(')+1, string.indexOf(')')) ;
        console.log(result);
        var newArray = result.split('');
        var numOfPerenths = 0;
        var nextIndexToRight = null;
        var nextIndexToLeft = null;
        console.log(newArray);

        for(var i = 0; i<newArray.length;i++){ //for each item in the inner parenths

            if( (newArray[i]==='-')||(newArray[i]==='+')||(newArray[i]==='x')||(newArray[i]==='/')||(newArray[i]==='*') ){ //if operator

                if( (newArray[i]==='x')||(newArray[i]==='/')||(newArray[i]==='*') ){

                    highOpCount += 1;
                }
                else if((newArray[i]==='-')||(newArray[i]==='+') ){

                    lowOpCount+=1;
                }
                newArray[i] = self.createItem( newArray[i] ); //create operator object
            }
        }

        console.log('number of high operators in array  ' + highOpCount,'number of low operators in array ' + lowOpCount );
        //after we convert all the operators strings into objects.. loop through again and find if any are high priority

        while(highOpCount>=1){
                for(var n = 0; n < newArray.length; n++){
                    console.log(newArray);
                    if(newArray[n].priority){//if the value is an operate and has priority true, find num1 and num2

                        // loop 1 get num 2 right of op

                        for(var x = n + 1; x<newArray.length;x++){

                            if( !(isNaN(parseFloat(newArray[x]))) ){ //starting one index to the right of operator

                                num2 += newArray[x];
                            }else{
                                nextIndexToRight = x; //index to concat after init calculation

                                break;
                            }
                        }
                        // loop 2   get num 1 left of op
                        for(var y = n - 1; y>=0;y--){
                            if(!(isNaN(parseFloat(newArray[y])))){ //starting one index to the right of operator
                                num1 = newArray[y] + num1;
                            }else{
                                nextIndexToLeft = y;
                                break;
                            }
                        }
                        console.log('num1 ' + num1, 'num2 ' + num2);

                        var calcVal = newArray[n].calculate( parseInt(num1), parseInt(num2) ); //find calc val
                        console.log('calcVal' + calcVal);
                        highOpCount-=1;
                        console.log('number of high operators left array  ' + highOpCount);
                        if(highOpCount===0 && lowOpCount === 0){  //if no more operators.. the current calc val is the last item, so we just make an array with just that..
                            newArray = [];
                            newArray.push(calcVal);
                            console.log(newArray);
                            num1 = '';
                            num2 = '';
                            return;
                        }else{//if there's still low ops but no high ops

                            console.log('number of high operators left array  ' + highOpCount, 'num of low ops left ' + lowOpCount);
                            if(newArray[0]===num1[0]){ //if calc val is the first most poss option
                                console.log('first');
                                tempArray.push(calcVal);
                                for(var k = nextIndexToRight; k<newArray.length;k++){  //make new array with calc value and the reset..
                                    tempArray.push(newArray[k]);
                                }

                            }else if(newArray[newArray.length-1]===num2[num2.length-1]){ //if it's the last poss option
                                console.log('second');
                                for(var j = 0; j<nextIndexToLeft+1;j++){  //make new array with calc value and the reset..
                                    tempArray.push(newArray[j]);
                                }
                                tempArray.push(calcVal);

                            }
                            else{ //if calculation is in middle of array
                                console.log('third');
                                for(var g = 0; g<=nextIndexToLeft; g++){
                                    tempArray.push(newArray[g]);
                                }
                                tempArray.push(calcVal);
                                console.log('next Index to right' + nextIndexToRight);
                                for(var f = nextIndexToRight; f < newArray.length; f++){
                                    tempArray.push(newArray[f]);
                                }


                            }
                            newArray = tempArray;
                            tempArray = [];
                            num1 = '';
                            num2 = '';


                        }
                    }
                }
        }

        console.log(newArray);
        while(lowOpCount>=1){
            for(var h = 0; h<newArray.length;h++){

                if( (typeof newArray[h] === 'object') && (!(newArray[h]).priority) ) {

                    for(var d = h + 1; d<newArray.length;d++){

                        if( !(isNaN(parseFloat(newArray[d]))) ){ //starting one index to the right of operator
                            num2 += newArray[d];
                        }else{
                            nextIndexToRight = d; //index to concat after init calculation

                            break;
                        }
                    }
                    // loop 2   get num 1 left of op
                    for(var t = h - 1; t>=0;t--){
                        if(!(isNaN(parseFloat(newArray[t])))){ //starting one index to the right of operator
                            num1 = newArray[t] + num1;
                        }else{
                            nextIndexToLeft = t;
                            break;
                        }
                    }
                    console.log('num1 ' + num1, 'num2 ' + num2);
                    var calcVal = newArray[h].calculate( parseInt(num1), parseInt(num2) ); //find calc val
                    console.log('calcVal' + calcVal);
                    lowOpCount -= 1;
                    console.log('number of high operators left array  ' + highOpCount);
                    if(highOpCount===0 && lowOpCount === 0) {  //if no more operators.. the current calc val is the last item, so we just make an array with just that..
                        newArray = [];
                        newArray.push(calcVal);
                        console.log(newArray);
                        num1 = '';
                        num2 = '';
                        return;
                    }else{ //if one or more low priority operators left..
                        console.log('first');
                        tempArray.push(calcVal);
                        for(var u = nextIndexToRight; u<newArray.length;u++){  //make new array with calc value and the reset..
                            tempArray.push(newArray[u]);
                        }
                        newArray = tempArray;
                        tempArray = [];
                        console.log(newArray);
                        num1 = '';
                        num2 = '';
                        console.log(newArray);

                    }
                }
            }
        }
        return;





        //if no 'x' or '/' start back over and trigger the first operator that you made above
        for (var b = 0; b < newArray.length; b++) {

            if (!(newArray[b] instanceof calculation ) && (typeof newArray[b] === 'object') && !(newArray[b].priority)) { //if no 'x' or '/' it's a minus or plus

                //loop 1
                for (var l = b + 1; l < newArray.length; l++) {
                    if ( !(isNaN(parseFloat(newArray[l]))) ) {

                        num2 += newArray[l];

                    } else {
                        nextIndexToStart = l;   //keep looping to the right until value is not a number
                        break; //if operator set next index
                    }
                }
                //loop 2
                for (var v = b - 1; v >= 0; v--) {
                    if (!(isNaN(parseFloat(newArray[v])))) {
                        num1 = newArray[v] + num1;
                        //console.log('num1 :' + num1); //keep looping to the left until value is not a number
                    }else if(newArray[v] instanceof calculation){
                            num1 = newArray[v].value;
                        break;
                    } else {
                        break;
                    }
                }
                //still in if statement

                var calculationObject = new calculation(parseFloat(num1), newArray[b], parseFloat(num2)); //after we have num1 and two, make calc object
                num1 = '';
                num2 = '';
                //parenths.. replace original parenths with calc object

            }

        }
    };

        //var replacingChunk = string.substring( string.lastIndexOf('('), string.indexOf(')')+1) ;
        //var objVal = newArray[0].value;
        //var newString = string.replace(replacingChunk, objVal);
        //console.log(newString);
        ////it broke here be carefull
        //for(var t = 0; t<newString.length; t++){
        //    if ( (newString[t]==='(')|| (newString[t]===')') ){
        //        numOfPerenths += 1;
        //    }
        //}
        //if(numOfPerenths < 1){
        //    console.log(newString);
        //    return;
        //}else{
        //    this.calculateParenths(newString); //if there's more parentheses,, run the function again, until we have something like 5*55 or 555+34
        //}
        //return;


    //method that either updates the display, and the model, and desi
    this.addItem = function (value) {

        if (isNaN(parseFloat(value)) && value !== '(' && value !== ')') {//if not a number,return true

            switch (value) { //if it's not an operator but one of the below options..

                case '+/-':
                    if (this.array.length >= 1) {

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

                                    if (this.num1[v] === '('){
                                        this.openCount+=1;
                                    }
                                    if (this.num1[v] === ')'){
                                        this.closeCount+=1;
                                    }


                                    if (this.num1[this.num1.length-1] === ')') {
                                       // if the last item is ')' and also open and close count are equal..
                                        if(this.openCount === this.closeCount){
                                            self.calculateParenths(this.num1);

                                            //your'e going to want to make the op object and put into array[1].. but before make num1 into calculation object
                                        operator = this.createItem(value);   //otherwise.. create the operator object and stick it in arr[1]
                                        this.array.push(operator); //update model
                                        this.callback(value); //update view
                                        this.openCount = 0;
                                        this.closeCount = 0;//make parenths count back to 0
                                        return;
                                        }
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
                                this.openCount+=1;
                            }
                            if (this.num1[o] === ')'){
                                this.closeCount+=1;
                            }
                        }

                        if(this.openCount>this.closeCount){
                            this.num1 = this.num1 + value;
                            this.array[0] = this.num1;
                            this.callback(this.num1);
                            this.openCount = 0;
                            this.closeCount = 0;


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
            case '*':
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

var calculation = function(num1, operator, num2){
    this.value = operator.calculate(num1, num2);
    this.history = operator.history(num1, num2);
    this.historyArray = [num1, operator, num2];
};

var equalSign = function(){
    this.calculate = function(array){
        var calculationItem =  new calculation(array[0], array[1], array[2]);
        return calculationItem;
    };
};

//TODO number object

var plus = function(){
    this.priority = false;
    this.calculate = function(num1, num2){
        var sum = num1 + num2;
        return sum;
    };
    this.history = function(num1, num2){
        var hist = num1 + ' + ' + num2 + ' = ' + this.calculate(num1, num2);
        return hist;
    };
};

var minus = function(){
    this.priority = false;
    this.calculate = function(num1, num2){
        var difference = num1 - num2;
        return difference;
    };
    this.history = function(num1, num2){
        var hist = num1 + ' - ' + num2 + ' = ' + this.calculate(num1, num2);
        return hist;
    };
};

var multiply = function (){

    this.priority = true;
    this.calculate = function(num1, num2){
        var product = num1 * num2;
        return product;
    };
    this.history = function(num1, num2) {
        var hist = num1 + ' x ' + num2 + ' = ' + this.calculate(num1, num2);
        return hist;
    };
};

var divide = function(){
    this.priority = true;
    this.calculate = function(num1, num2){
        var quotient = num1 / num2;
        return quotient;
    };
    this.history = function(num1, num2){
        var hist = num1 + ' / ' + num2 + ' = ' + this.calculate(num1, num2);
        return hist;
    };
};
//

