calculator.prototype.operator = function(value){
    var self = this;
    length = self.arr.length;
    var curOperator = new operator(value);
    if(length===1){
        switch(value){
            case '/':
                curOperator.operation = function(num1, num2){
                    var quotient = num1/num2;
                    self.c(quotient, 'quotient');
                    var curCalculation = new calculationItem(quotient, 'quotient');
                };
                self.arr.push(curOperator);
                self.c(curOperator.value);
                break;

            case 'x':
                curOperator.operation = function(num1, num2){
                    var product = num1 * num2;
                    self.c(product, 'product');
                    var curCalculation = new calculationItem(product, 'product');
                };
                self.arr.push(curOperator);
                self.c(curOperator.value);
                break;

            case '-':
                curOperator.operation = function(num1, num2){
                    var difference = num1 - num2;
                    self.c(difference, 'difference');
                    var curCalculation = new calculationItem(difference, 'difference');
                };
                self.arr.push(curOperator);
                self.c(curOperator.value);
                break;

            case '+':
                //method for 3 items in array
                curOperator.operation = function(num1, num2){
                    var sum = num1 + num2;
                    self.c(sum, 'sum');
                    self.arr = [];
                    self.arr.push( calculationItem(sum, 'sum') );

                };
                //if one item in array
                self.arr.push(curOperator);
                self.c(curOperator.value);
                break;
        }
    }
    //if we press the equals and there's three items in array
    if(length === 3) {
        switch(value){
            case '=':
                self.calculate(num1, num2);//TODO add functionality;
                break;
            case '+':


        }
    }
};

calculator.prototype.calculate = function(num1, num2){//calculation method
    var self = this;
    self.arr[1].operation(num1, num2);
};

var operator = function(value){
    this.value = value;
    this.type = 'operator';
};

var calculationItem = function(calculation, type){
    this.calculation = calculation;
    this.type = type;
};