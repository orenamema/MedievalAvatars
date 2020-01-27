$(function(){
    var activeImage;

    $('.collapsible').collapsible();
    $('.carousel').carousel();
    
    createCarousel();

    $(".createPageList li").on("click", function(){
        var btnValue = $(this).attr("data-name");
        createCarousel(btnValue);
    })

    function createCarousel(btnValue = "authority") {
        $('.carousel').html('');
        $("#carouselDiv").removeClass("initialized");

        $.get("/api/classes/" + btnValue, function(data){
            data.forEach(element => {
                var imgName = element.img;
                var appendItem = `<a class="carousel-item" data-id="${element.id}"><img src="${imgName}"><span class="imgTitle">${element.career}</span></a>`;
                $(".carousel").append(appendItem);
         
            });
            $('.carousel').carousel({
                indicators: true,
                onCycleTo: function(data) {
                    activeImage = data.attr("data-id");
               }
            });
            $("#carouselDiv").addClass("initialized");

        });
    };
});