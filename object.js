var calculator = function(callback) {
    var self = this;
    self.arr = [];
    var c = callback;
    self.allClear = function () {
        $('#display').val('');
        self.arr = [];
    };
    self.addItem = function(value){
        if ( isNaN(parseFloat(value) ) ){

        }
        else{
           self.c.call(self, value);
        }
    };
}
