calculator.prototype.operator = function(value){
    var self = this;
    length = self.arr.length;
    var curOperator = new operator(value);//make new operator object

    if(length===1){                     //only one item in array
        switch(value){
            case '/':
                curOperator.operation = function(num1, num2){
                    var quotient = num1/num2;
                    self.c(quotient, 'quotient');
                    self.arr = [];
                    var curCalculation = new calculationItem(quotient, 'quotient');
                    self.arr.push(curCalculation);// [ {sum}, {+}, {?} }
                    self.num1 = curCalculation.value;
                };
                //do this if length = 1
                self.arr.push(curOperator);
                self.c(curOperator.value);
                break;

            case 'x'://ran on equals or times on length = 3
                curOperator.operation = function(num1, num2){
                    var product = num1 * num2;
                    self.c(product, 'product');
                    self.arr = [];
                    var curCalculation = new calculationItem(product, 'product');
                    self.arr.push(curCalculation);// [ {sum}, {+}, {?} }
                    
                    self.num1 = curCalculation.value;

                };
                //do this if length = 1
                self.arr.push(curOperator);
                self.c(curOperator.value);
                break;

            case '-':
                curOperator.operation = function(num1, num2){
                    var difference = num1 - num2;
                    self.c(difference, 'difference');
                    self.arr = [];
                    var curCalculation = new calculationItem(difference, 'difference');
                    self.arr.push(curCalculation);// [ {sum}, {+}, {?} }
                    self.num1 = curCalculation.value;
                };
                //do this if length = 1
                self.arr.push(curOperator);
                self.c(curOperator.value);
                break;

            case '+':
                //method creation nothing happens here
                curOperator.operation = function(num1, num2){////if equals operator is hit on three this method is also ran
                    var sum = num1 + num2;
                    self.c(sum, 'sum');//call function have it put sum on screen
                    self.arr = [];
                    var curCalculation = new calculationItem(sum, 'sum');//make object, clear array, push into array
                    self.arr.push(curCalculation);// [ {sum}, {+}, {?} }
                    self.num1 = curCalculation.value;
                    
                };
                //do this if length = 1
                self.arr.push(curOperator);//no calculation made, just push operator into middle slot of array
                self.c(curOperator.value);//then put it up on the screen

                break;
        }
    }

    //what is it.. self.calculate if not equal.. makes the calculation object, makes it arr[0], puts it on the screen; and then stick the new operation in the middle
    //if we press the equals and there's three items in array/ with a variable operation

    //TODO we had to readd the method to the object when replacing that as the middle operator in the array. maybe make the plus objects and so on?
    if(length === 3) {
       switch(value){
           case '+':
               self.calculate(self.num1, self.num2);
               curOperator.operation = function(num1, num2){////if equals operator is hit on three this method is also ran
                   var sum = num1 + num2;
                   self.c(sum, 'sum');//call function have it put sum on screen
                   self.arr = [];
                   var curCalculation = new calculationItem(sum, 'sum');//make object, clear array, push into array
                   self.arr.push(curCalculation);// [ {sum}, {+}, {?} }
                   self.num1 = curCalculation.value;
                   
               };
               self.arr.push(curOperator);
               
               break;

           case '-':
               self.calculate(self.num1, self.num2);
               curOperator.operation = function(num1, num2){
                   var difference = num1 - num2;
                   self.c(difference, 'difference');
                   self.arr = [];
                   var curCalculation = new calculationItem(difference, 'difference');
                   self.arr.push(curCalculation);// [ {sum}, {+}, {?} }
                   self.num1 = curCalculation.value;
               };
               self.arr.push(curOperator);
               
               break;

           case '/':
               self.calculate(self.num1, self.num2);
               curOperator.operation = function(num1, num2){
                   var quotient = num1/num2;
                   self.c(quotient, 'quotient');
                   self.arr = [];
                   var curCalculation = new calculationItem(quotient, 'quotient');
                   self.arr.push(curCalculation);// [ {sum}, {+}, {?} }
                   self.num1 = curCalculation.value;
               };
               self.arr.push(curOperator);
               
               break;

           case 'x':
               self.calculate(self.num1, self.num2);
               curOperator.operation = function(num1, num2){
                   var product = num1 * num2;
                   self.c(product, 'product');
                   self.arr = [];
                   var curCalculation = new calculationItem(product, 'product');
                   self.arr.push(curCalculation);// [ {sum}, {+}, {?} }
                   self.num1 = curCalculation.value;
               };
               self.arr.push(curOperator);
               
               break;

           default:
                self.calculate(self.num1, self.num2);
               
               break;
       }
    }
};

//calculation method, finds middle arr val and runs the operation method on it
calculator.prototype.calculate = function(num1, num2){//we also make a prototype so we can access the array
    var self = this;
    self.arr[1].operation(num1, num2);//run operation method on middle operator
};

//operator object that holds value and operation method
var operator = function(value){
    this.value = value;
    this.type = 'operator';
};

var calculationItem = function(calculation, type){
    this.value = calculation;
    this.type = type;
};