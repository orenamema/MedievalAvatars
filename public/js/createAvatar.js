$(function(){
    $('.collapsible').collapsible();
    $('.carousel').carousel();

    createCarousel();
    function createCarousel(btnValue = "authority") {
        $('.carousel').html('');
        $("#carouselDiv").removeClass("initialized");

        $.get("/api/classes/" + btnValue, function(data){
            data.forEach(element => {
                var imgName = element.img;
                var appendItem = `<a class="carousel-item"><img src="${imgName}"></a>`;
                $(".carousel").append(appendItem);
         
            });
            $('.carousel').carousel();
            $("#carouselDiv").addClass("initialized");

        });
    }

    $(".createPageList li").on("click", function(){
        var btnValue = $(this).attr("data-name");
        createCarousel(btnValue);
    })

});