// import { json } from "sequelize/types";

$(function(){

    // ========================= Carousel ==================================================
    var activeImage;

    $('.collapsible').collapsible();
    $('.carousel').carousel();

    createCarousel();

    $(".createPageList li").on("click", function(){
        var btnValue = $(this).attr("data-name");
        createCarousel(btnValue);
    })

    function createCarousel(btnValue = "royal") {
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
    }

 
    function getPersonalityTraits() {
        var values = "";
        $(':checkbox:checked').each(function(i){
            values += `${$(this).val()},`;
        });
        return values
    };


    $(".create-form").on("submit", function(event){
        event.preventDefault();
        var personalityTraits = getPersonalityTraits();
        var userId = JSON.parse(localStorage.getItem("user"));
        console.log("userid", userId)

        var newAvatar = {
            name: $('#newName').val().trim(),
            age: $('#newAge').val().trim(),
            personality: personalityTraits,
            backstory: $('#newBackstory').val().trim(),
            details: $('#newDetails').val().trim(),
            AvatarClassesId: activeImage
        }

        $.ajax("/api/create/"+ userId.id, {
            type: "POST",
            data: newAvatar
        }).then(function(){
            console.log("Created new Avatar");
            location.reload();
        });
    });


    // ========================= Button color effects ==================================================
    $("#royal-tab").mouseover(function(){
        $(this).css('color', '#ff00ff');
    }).mouseout(function(){
        $(this).css('color', 'white');
    });

    $("#authority-tab").mouseover(function(){
        $(this).css('color', '#42a4ff');
    }).mouseout(function(){
        $(this).css('color', 'white');
    });

    $("#military-tab").mouseover(function(){
        $(this).css('color', '#f50057');
    }).mouseout(function(){
        $(this).css('color', 'white');
    });

    $("#clergy-tab").mouseover(function(){
        $(this).css('color', '#ffe600');
    }).mouseout(function(){
        $(this).css('color', 'white');
    });

    $("#merchant-tab").mouseover(function(){
        $(this).css('color', '#ca8e56');
    }).mouseout(function(){
        $(this).css('color', 'white');
    });

    $("#peasantry-tab").mouseover(function(){
        $(this).css('color', '#00ff00');
    }).mouseout(function(){
        $(this).css('color', 'white');
    });


    // ========================= Slide button ==================================================
    $('.tooltipped').tooltip();

    $(document).ready(function(){
        $('#modal1').modal();
        $('#modal2').modal();
        $('#modal3').modal();
        $('#modal4').modal();
        $('#modal5').modal();
        $('#modal6').modal();
        $('#modal7').modal();
    });

});