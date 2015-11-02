var callback = function(value){
    //switch(value){
    //    case 'undefined':
    //        $('#display').val('');
    //        break;
    //    default:
    //        $('#display').val(value);
        console.log('new calc created');
    }


var myCalc = new calculator(callback);


$(function(){
   $('button').click(function(){
       console.log('clicked');
     var val = $(this).text();
       console.log ('val clicked: ' + val);
       switch(val){
           case 'AC':
               myCalc.allClear();
               break;
           default:
               myCalc.addToScreen(val);
       }
   });
});