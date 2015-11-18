var calculator = function(callback) {
    this.allClear = function () {
        $('#display').val('');
        self.arr = [];
    };
};

var plus = function(num1, num2){
    this.sum = num1 + num2;
    this.history = num ' + ' num2 ' = ' + this.sum;
};

var minus = function(num1, num2){
    this.difference = num1 - num2;
    this.history = num ' - ' num2 ' = ' + this.difference;
};

var multiply = function (num1, num2){
    this.product = num1 * num2;
    this.history = num1 + ' x ' + num2 + ' = ' + this.product;
};

var divide = function(num1, num2){
    this.quotient = num1 / num;
    this.history = num1 + ' / ' + num2 + ' = ' + this.quotient;
};


