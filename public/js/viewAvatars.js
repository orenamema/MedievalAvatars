$(function () {
    var getUserId = JSON.parse(localStorage.getItem("user"));
    $(".viewOwnAvatars").attr("href", `/all/${getUserId.id}`);
     
    $(".saveBtn").on("click", function(e) {
        e.preventDefault();
        var imgId = $(this).data("id");;
        var userId = JSON.parse(localStorage.getItem("user"));

        $.post("/api/save/" + imgId, {user: userId.id}, function(data){
                        
        })
    });
    $(".deleteBtn").on("click", function(e) {
        e.preventDefault();
        var imgId = $(this).data("id");;
        var userId = JSON.parse(localStorage.getItem("user"));

        $.post("/api/delete/" + imgId, {user: userId.id}, function(data){
            location.reload();
        })
    });

    $("#royal-view").mouseover(function () {
        $(this).css('color', '#ff00ff');
    }).mouseout(function () {
        $(this).css('color', 'white');
    });

    $("#authority-view").mouseover(function () {
        $(this).css('color', '#42a4ff');
    }).mouseout(function () {
        $(this).css('color', 'white');
    });

    $("#military-view").mouseover(function () {
        $(this).css('color', '#f50057');
    }).mouseout(function () {
        $(this).css('color', 'white');
    });

    $("#clergy-view").mouseover(function () {
        $(this).css('color', '#ffe600');
    }).mouseout(function () {
        $(this).css('color', 'white');
    });

    $("#merchant-view").mouseover(function () {
        $(this).css('color', '#ca8e56');
    }).mouseout(function () {
        $(this).css('color', 'white');
    });

    $("#peasantry-view").mouseover(function () {
        $(this).css('color', '#00ff00');
    }).mouseout(function () {
        $(this).css('color', 'white');
    });


})

