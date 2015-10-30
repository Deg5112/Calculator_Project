//controller
var calculator = function(model){
    var self = this;
    self.arr = [];

}

self.addItem(){
    if(isNaN(val){ //check to see what value it is.. like a plus sign or something else.. we'll get to the method later
        self.createItem();//get to it later if it's an operator or +/- or %

    }else {// if number
        if (self.arr.length < 1) { //if num and greater than 1
            self.arr.push(val);//push val into first spot in array
        } else {//if more than one item in array
            if (self.arr.length < 2) {//if only one item in array and it's a num
                var n1 = arr[0] + val; //concantenate this val with with the current and replace that index with new num
                self.arr[0] = n1;
                console.log(self.arr.[0]);
            } else {//if two items in array which means first is num. second is either operator or += or %

            }
        }
    }
}
//calculator create item method if not a number
self.createItem = function(operator){ //add createItem method to calculator
    var r = new CalculatorItem(); //create new instance of item
    switch(operator){
        case '+':
            r = = new Plus();
    }
}

//number object
var number = function (num, callback){
    var self = this;
    var val = null;
    calculatorItem.call(self, parseFloat(num));
    if(callback && typeof callback == function){
        self.displayElm.on('click', callback);
    }
}
//operator object
var operator = function (str){
    var self = this;
    calculatorItem.call(self, str);
}
operator.prototype.calculate= function(num1, num2){
    var num1Value = num1;
    var num2Value= num2;
    if(typeof num1 == 'number'){
        num1Value = new Number(num1)
    }
    if(typeof num2 == 'number'){
        num2Value = new Number(num2);
    }
}

//plus object
var Plus = function(){
    var self = this;
    operator.call(self, '+');
    self.calculate= function(num1, num2){
        var values = operator.prototype.calculate.call(this, num1, num2);

        return values[0] va;ies[1]
    }
}

