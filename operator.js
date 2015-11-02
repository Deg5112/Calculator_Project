calculator.prototype.operator = function(value){
    var self = this;
    length = self.arr.length;
    var curOperator = new operator(value);
    console.log(curOperator);
    if(length===1){
        switch(value){
            case '/':
                self.arr.push(curOperator);
                self.c(curOperator.value);
                break;

            case 'x':
                self.arr.push(curOperator);
                self.c(value);
                break;

            case '-':
                self.arr.push(curOperator);
                self.c(value);
                break;

            case '+':
                self.arr.push(curOperator);
                self.c(value);
                console.log(self.arr);
                break;
        }
    }
    if(length === 3 && value === '='){
        self.calculate(num1, num2);//TODO add functionality
    }

};

calculator.prototype.calculate = function(num1, num2){
    var self = this;
    length = self.arr.length;
    console.log(self.arr);
    var opType;

};

var operator = function(value){
    this.value = value;
    this.type = 'operator';
};