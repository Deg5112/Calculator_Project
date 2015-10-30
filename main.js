
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
