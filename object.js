var calculator = function(callback) {
    var self = this;
    self.arr = [];
    var length;
    self.c = callback;
    self.allClear = function () {
        $('#display').val('');
        self.arr = [];
    };
    var num1;
    var num2;
    var concat;
    var concatAgain;
    self.addItem = function(value){
           if( isNaN(parseFloat(value)) ) {//if not a number
                switch(value){
                    case '+/-':
                        //TODO add functionality
                        break;
                    case '%':
                        //TODO add functionality
                        break;
                    default:
                        self.operator(value);
                }
           }else{
               self.addNum(value);
           }
    };
};


