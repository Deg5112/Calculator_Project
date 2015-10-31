var calculator = function(callback) {
    var self = this;
    self.c = callback;
    self.arr = [];


//allclear erases array and resets the display to none because we have no path for it , it's undefined
    self.addToScreen = function (val) {
        console.log('hello');
        console.log('val');
        self.c(val);
    };
        var $input = $('#display');
    $input.val(val);
};