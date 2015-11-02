function callback(value){
    switch(value){
        case 'undefined':
            $('#display').val('');
            break;
        default:
            $('#display').val('');
            break;
    }
}


var myCalc = new calculator(callback);


$(function(){
   $('button').click(function(){
       console.log('clicked');
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