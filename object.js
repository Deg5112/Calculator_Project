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
                            console.log(self.arr);
                            var objVal = self.arr[(self.arr.length)-1].value;
                            objVal *= -1;
                            self.arr[(self.arr.length)-1].value = objVal;
                            self.c(objVal);
                            switch(self.arr.length){
                                case 1:
                                    self.num1 = objVal;
                                    break;
                                case 3:
                                    self.num2 = objVal;
                            }
                        }

                        break;
                    case '%':
                        if(self.arr.length>=1){
                            var objVal = self.arr[(self.arr.length)-1].value;
                            objVal /= 100;
                            self.arr[(self.arr.length)-1].value = objVal;
                            self.c(objVal);
                            switch(self.arr.length){
                                case 1:
                                    self.num1 = objVal;
                                    break;
                                case 3:
                                    self.num2 = objVal;
                            }
                            break;
                        }
                    case '.':
                        if(self.arr.length>=1) {
                            console.log(self.arr);
                            var objVal = self.arr[(self.arr.length) - 1].value;
                            var string = objVal.toString();
                            for(var i = 0; i<string.length; i++){
                                if(string[i]==='.'){
                                    return;
                                }
                            }
                            if (objVal % 1 === 0) {
                                var result = objVal + '.';
                                self.arr[(self.arr.length) - 1].value = result;
                                self.c(result);
                                if(self.arr.length === 1){
                                    self.num1 = result;
                                }else if(self.arr.length === 3){
                                    self.num2 = result;

                                }
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


