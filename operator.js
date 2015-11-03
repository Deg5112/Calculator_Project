calculator.prototype.operator = function(value){
    var self = this;
    length = self.arr.length;
    var curOperator = new operator(value);
    console.log(curOperator);
    if(length===1){
        switch(value){
            case '/':
                curOperator.operation = function(num1, num2){
                    var quotient = num1/num2;
                    self.c(quotient);
                }
                self.arr.push(curOperator);
                self.c(curOperator.value);
                break;

            case 'x':
                curOperator.operation = function(num1, num2){
                    var product = num1 * num2;
                    self.c(product);
                }
                self.arr.push(curOperator);
                self.c(value);
                break;

            case '-':
                curOperator.operation = function(num1, num2){
                    var difference = num1 - num2;
                    self.c(difference);
                }
                self.arr.push(curOperator);
                self.c(value);
                break;

            case '+':
                curOperator.operation = function(num1, num2){
                    var sum = num1 + num2;
                    self.c(sum);
                }
                self.arr.push(curOperator);
                self.c(value);
                console.log(self.arr);
                break;
        }
    }
    //if we press the equals and there's three items in array
    if(length === 3) {
        switch(value){
            case '=':
                console.log('num 1   ' + num1 + '  num2  ' + num2);
                self.calculate(num1, num2);//TODO add functionality;
                break;
            case '-':

        }

    }
};

calculator.prototype.calculate = function(num1, num2){
    var self = this;
    self.arr[1].operation(num1, num2);
};

var operator = function(value){
    this.value = value;
    this.type = 'operator';
};