var callback = function(value){
    switch(value){
        case 'undefined':
            $('#display').val('');
            break;
        default:
            $('#display').val(value);
    }
};

var myCalc = new calculator(callback);


$(function(){
   $('button').click(function(){
     var val = $(this).text();
       switch(val){
           case 'AC':
               myCalc.allClear();
               break;
           default:
               myCalc.addToScreen(val);
       }
   });
});