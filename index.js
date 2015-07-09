jQuery(function($){
    var j = 100;

    for(var i=1;i<=j;i++){
        if(i % 2 ===0){
            setTimeout(hidden, 2000);
        }
        console.log(i);
    }
});

function hidden(){
    $('.hand').css({display:'hidden'});       
    $('.blank').css({display:'hidden'});       
}
