/**
 * Created by Giuseppe on 28/10/2018.
 */

$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');
    }
});

<!--Login Modal with JQuery-->

$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#logininModal").modal();
    });
    $('#loginCancelBtn').click(function(){
        $('#logininModal').modal('hide');
    });
});



<!--Reserve table Modal with JQuert-->

$(document).ready(function(){
    $("#myBtn2").click(function(){
        $("#reservetable").modal();
    });

    $('#reserveTableCloseBtn').click(function(){
        $('#reservetable').modal('hide');
    });
    $('#reserveTableCancelBtn').click(function(){
        $('#reservetable').modal('hide');
    });

});

