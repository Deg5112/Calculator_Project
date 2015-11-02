var calculator = function(callback) {
    var self = this;
    self.arr = [];
    self.allClear = function () {
        $('#display').val('');
        self.arr = [];
    }

    var num1;
    var num2;
    self.addToScreen = function (val) {
        //you'll want to change this to.. define the val.. if not a num.. run this function.. if num.. run this..
        switch (val) {
            case '%':
                switch(self.arr.length){
                    case 1:
                        parse.float
                }


                break;
            case '+/-':

                break;

            case '.':

                break;

            case '/':
                if (self.arr.length === 1) {//if there's already a num in arr[0]
                    self.arr.push(val);
                    $('#display').val(val);
                    num1 = self.arr[0];
                    console.log(num1);
                }

                break;

            case 'x':
                if (self.arr.length === 1) {
                    self.arr.push(val);
                    $('#display').val(val);
                    num1 = self.arr[0];
                    console.log(num1);
                }

                break;

            case '-':
                if (self.arr.length === 1) {
                    self.arr.push(val);
                    $('#display').val(val);
                    num1 = self.arr[0];
                    console.log(num1);
                }

                break;

            case '+':
                if (self.arr.length === 1) {
                    self.arr.push(val);
                    $('#display').val(val);
                    num1 = self.arr[0];
                    console.log(num1);
                }

                break;

            case '=': //if 3 items in array, run calculate method
                if(self.arr.length===3){
                    num2 = self.arr[2];
                    self.calculate(self.arr, num1, num2);
                }break;

            default:
                //if val is a num
                switch (self.arr.length) {
                    case 0:
                        $('#display').val(val);
                        $(self.arr.push(val));
                        break;

                    case 1:
                        var concat = self.arr[0] + val;
                        self.arr[0] = concat;
                        $('#display').val(concat);
                        break;

                    case 2:
                        $('#display').val(val);
                        self.arr.push(val);
                        console.log(self.arr);
                        break;
                    case 3:
                        var concatAgain = self.arr[2] + val;
                        self.arr[2] = concatAgain;
                        $('#display').val(concatAgain);
                        console.log(self.arr);
                        break;
                }
        }
    };
}
