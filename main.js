function callback(value, type){
    switch(value){
        case 'undefined':
            $('#display').val('');
            break;
        default:
            $('#display').val(value);
            break;
    }
}


var myCalc = new calculator(callback);


$(function(){
   $('button').click(function(){
     var val = $(this).text();
       switch(val){
           case 'AC':
               myCalc.allClear();
               break;
           default:
               myCalc.addItem(val);
       }
   });
});