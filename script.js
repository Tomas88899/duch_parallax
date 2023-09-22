

let sirkaOkna = $("body").width();
let vyskaOkna = $("body").height();

let polkaS = (sirkaOkna /2) 
let polkaV = (vyskaOkna /2 );

$("#parallax").mousemove(function(evt){
	
    let myska_x = evt.clientX ;
    let myska_y = evt.clientY ;



    $(".bublinky2").css({left: evt.clientX - 900, top: evt.clientY - 450});
    $(".duch").css({right: evt.clientX -50, bottom:evt.clientY-50 });
    $(".bublinky").css({right: evt.clientX /10, bottom:evt.clientY/10 });
 


})


