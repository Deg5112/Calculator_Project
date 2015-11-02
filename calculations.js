calculator.prototype.calculate = function(arr, num1, num2){
    switch (arr[1]){//wahtever the value is over the operator
        case '+':
            this.add(num1, num2);
            break;
        case '-':
            this.subtract(num1, num2);
            break;
        case 'x':
            this.multiply(num1, num2);
            break;
        case '/':
            this.divide(num1, num2);
            break;
    }
};

calculator.prototype.add = function(num1, num2){
    var sum = +num1 + (+num2);
    $('#display').val(sum);
    self.arr = [];
    console.log(self.arr);
};

calculator.prototype.divide = function(num1, num2){
    var quotient = +num1/(+num2);
    $('#display').val(quotient);
    self.arr = [];
    console.log(self.arr);
};

calculator.prototype.multiply = function(num1, num2){
    var product = +num1 * (+num2);
    $('#display').val(product);
    self.arr = [];
    console.log(self.arr);
};

calculator.prototype.subtract = function(num1, num2){
    var difference = num1 - (+num2);
    $('#display').val(difference);
    self.arr = [];
    console.log(self.arr);
};
