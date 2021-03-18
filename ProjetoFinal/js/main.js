$(function() {
    $("#creators").hide();
    $(window).scroll(function(){            
        var topo = $(window).scrollTop();
        if(topo > 1502){
            $("#creators").fadeIn('600');
        }
        else {
            $("#creators").fadeOut('900');
        }
    });
    $("#IxC").hide();
    $(window).scroll(function(){            
        var topo = $(window).scrollTop();
        if(topo > 3675){
            $("#IxC").fadeIn('600');
        }
        else {
            $("#IxC").fadeOut('900');
        }
    });
    $("#classi").hide();
    $(window).scroll(function(){            
        var topo = $(window).scrollTop();
        if(topo > 4505){
            $("#classi").fadeIn('600');
        }
        else {
            $("#classi").fadeOut('900');
        }
    });
    $("#links").hide();
    $(window).scroll(function(){            
        var topo = $(window).scrollTop();
        if(topo > 6725){
            $("#links").fadeIn('600');
        }
        else {
            $("#links").fadeOut('900');
        }
    });
    // $("footer").hide();
    // $(window).scroll(function(){            
    //     var topo = $(window).scrollTop();
    //     if(topo > 6975){
    //         $("footer").fadeIn('600');
    //     }
    //     else {
    //         $("footer").fadeOut('900');
    //     }
    // });
})