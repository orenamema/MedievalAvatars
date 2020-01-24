$(function(){

    $(".button-row").on("click", function(){
        var btnvalue = $(this).attr("data-name-")
        $.get("/api/social-class/" + btnvalue, function (data){
            for (var i = 0; i < data.length; i++){

                var carouselItem = $("<a>");
                carouselItem.addClass("carousel-item");
                carouselItem.attr("id", "item-" + i);

                $("#carousel").append(carouselItem + "img src=" + data[i].img + "</a>");
            }
        });
    });

});