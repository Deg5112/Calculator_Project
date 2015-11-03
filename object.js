var calculator = function(callback) {
    var self = this;
    self.arr = [];
    self.c = callback;
    self.lastNumber;
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
                        var objVal = self.arr[(self.arr.length)-1].value;
                            objVal *= -1;
                            self.arr[(self.arr.length)-1].value = objVal;
                            self.c(objVal);
                        break;
                    case '%':
                        var objVal = self.arr[(self.arr.length)-1].value;
                        objVal /= 100;
                        self.arr[(self.arr.length)-1].value = objVal;
                        self.c(objVal);//TODO add functionality
                        break;
                    default:
                        self.operator(value);
                }
           }else{
               self.addNum(value);
           }
    };
};


