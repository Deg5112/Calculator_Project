var calculator = function(callback) {
    var self = this;
    self.arr = [];
    self.c = callback;
    self.lastNumber;
    self.allClear = function () {
        $('#display').val('');
        self.arr = [];
    };
    self.num1;
    self.num2;

    self.addItem = function(value){

           if( isNaN(parseFloat(value) ) ) {//if not a number,return true
                switch(value){
                    case '+/-':
                        if(self.arr.length>=1){
                            var objVal = self.arr[(self.arr.length)-1].value;
                            objVal *= -1;
                            self.arr[(self.arr.length)-1].value = objVal;
                            self.c(objVal);
                        }

                        break;
                    case '%':
                        if(self.arr.length>=1){
                            var objVal = self.arr[(self.arr.length)-1].value;
                            objVal /= 100;
                            self.arr[(self.arr.length)-1].value = objVal;
                            self.c(objVal);
                            break;
                        }
                    case '.':
                        if(self.arr.length>=1){
                            if (objVal % 1 === 0) {
                                var result = objVal + '.';
                                console.log(result);
                                self.arr[(self.arr.length)-1].value = result;
                                self.c(result);
                                self.num1 = result;
                            }
                        }
                        break;

                    default:
                        self.operator(value);
                            break;
                }
           }else{//if number
               self.addNum(value);
           }
    };
};


