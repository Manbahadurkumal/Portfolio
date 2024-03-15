$(".navbar-nav li a").click(function(){
    $(".navbar-nav li a").removeClass("active");
    $(this).addClass("active");
    $(".tab").hide();
    // alert($(this).attr("data-target"));
    $("#" + $(this).attr("data-target")).show();
})
