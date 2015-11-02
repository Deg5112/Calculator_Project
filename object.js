var calculator = function(callback){
    var self = this;
    self.arr = [];
    self.allClear = function(){
        $('#display').val('');
        self.arr = [];
        console.log(self.arr);
    }
    self.addToScreen = function(val){
        console.log('add function running');
        switch(val){
            case '%':


                break;
            case '+/-':

                break;

            case '.':

                break;

            case '/':
                if(self.arr.length > 0 && self.arr.length < 2){
                    self.arr.push(val);
                    console.log(self.arr);
                    $('#display').val(val);
                }

                break;

            case 'x':
                if(self.arr.length > 0 && self.arr.length < 2){
                    self.arr.push(val);
                    console.log(self.arr);
                    $('#display').val(val);
                }

                break;

            case '-':
                if(self.arr.length > 0 && self.arr.length < 2){
                    self.arr.push(val);
                    console.log(self.arr);
                    $('#display').val(val);
                }

                break;

            case '+':
                if(self.arr.length > 0 && self.arr.length < 2){
                    self.arr.push(val);
                    console.log(self.arr);
                    $('#display').val(val);
                }

                break;

            case '=':

                break;

            default:
                if( isNaN(parseFloat(val) ) ){ //if not a number, check..
                    console.log('not a number');
                    console.log('self arr length: ' + self.arr.length);
                    if(self.arr.length>0 && self.arr.length < 2){

                    }

                }
                if(self.arr.length<1) {// if no items in array
                    $('#display').val(val);
                    $(self.arr.push(val));
                    console.log(self.arr);
                    break;
                }else{
                    if(self.arr.length<2){ //concat if you click nums consecutively and only one item in array
                        var concat = self.arr[0] + val;
                        self.arr[0] = concat;
                        $('#display').val(concat);
                        console.log(self.arr);
                    }
                }
            }
         }
    }

