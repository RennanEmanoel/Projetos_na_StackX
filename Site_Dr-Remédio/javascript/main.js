$(function(){

    $("#Sobre").hide();
        $(window).scroll(function(){            
            var topo = $(window).scrollTop();
            if(topo < 90){
                $("#Sobre").fadeOut('600');
            }
            else {
                $("#Sobre").fadeIn('100');
            }
        });
});

