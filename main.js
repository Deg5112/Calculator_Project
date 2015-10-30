model that updates the view
what are we updating based on something thats updated by the user?
function model(value){
    switch(value){
        case 'undefined':
            $('#display').val('');
            break;
        default:
            $('#display').val(value);
    }

}



//instantiate new object
var calc1 = new calculator();

//user interactions from view

$(function(){
    $('button').click(function(){
       var val = $(this).val(); //variable that's passed in methods of the controller's method's parameters
        switch (val){
            case 'AC':
                calc1.clearAll();
                break;
            default:
                calc1.addItem(); // this will handle all items added whether it's the first item or the second or operator
                // and will spit out the result on the board
        } //
    });


});

