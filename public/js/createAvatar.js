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
    }




    // ========================= Create Avatar ==================================================
    $(".createPageList li").on("click", function(){
        var btnValue = $(this).attr("data-name");
        createCarousel(btnValue);
    })


    var Avatar = {
        create: function(data, cb) {
            Avatar.create("Avatars", data, function(res){
                cb(res);
            });
        }
    };
    

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var result = $('input[type="checkbox"]:checked');
        console.log(result[0].value);
        console.log(result.length);
        
        var string = "";
        for (var i = 0;i < result.length; i++) {
            var ele = result[i].length;
            string += ele;
        }
        console.log(string);
    });



    $(".create-form").on("submit", function(event){
        event.preventDefault();

        // var result = $('input[type="checkbox"]:checked');
        // console.log(result[0].value);
        // console.log(result.values);

        // for (var i = 0; i < result.value.length; i++) {

        // }

        // let newTraits = result.value.join(" ");
        // console.log(newTraits);

        var newAvatar = {
            name: $('#newName').val().trim(),
            age: $('#newAge').val().trim(),
            // personality: newTraits,
            backstory: $('#newBackstory').val().trim(),
            details: $('#newDetails').val().trim(),
            id: 1
        }
        var localStorageId = 
        $.ajax("/api/create/"+ localStorageId, {
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


    // ========================= Slidenav ==================================================

});