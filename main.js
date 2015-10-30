//model that updates the view
//what are we updating based on something thats updated by the user?
//function model(value){
//    switch(value){
//        case 'undefined':
//            $('#display').val('');
//            break;
//        default:
//            $('#display').val(value);
//    }
//
//}
//
//
//
////instantiate new object
//var calc1 = new calculator();
//
////user interactions from view
//
//$(function(){
//    $('button').click(function(){
//       var val = $(this).val(); //variable that's passed in methods of the controller's method's parameters
//        switch (val){
//            case 'AC':
//                calc1.clearAll();
//                break;
//            default:
//                calc1.addItem(); // this will handle all items added whether it's the first item or the second or operator
//                // and will spit out the result on the board
//        } //
//    });
//
//
//});

function callback(type, value, item) {
    switch (value) {
        case undefined:
            $('#display').val("");
            break;
        default:
            $('#display').val(value);
            break;
    }
}
// my_calculator - creates a new calculator object
var my_calculator = new calculator(callback);
//after DOM load add click handlers to all buttons
$(document).ready(function () {
    $('button').on('click', function () {
        var val = $(this).text();
        switch (val) {
            case 'AC':
                my_calculator.allClear();
                break;
            default:
                my_calculator.addItem($(this).text());
                break;
        }
    });
});
