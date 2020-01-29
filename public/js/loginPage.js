// import { json } from "sequelize/types";

// We get all the necessary ids into variables
var $userName = $("#userName");
var $password = $("#password");
var $submitBtn = $("#login");
var $createBtn = $("#create");
var userNameInputLabel = $("#userNameInputLabel")

// We create an API Object that will communicate
// with the server to send the username and password
// in a post request
var API = {
    login: function (data) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/login",
            data: JSON.stringify(data)
        });
    },
    create: function (data) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/createAccount",
            data: JSON.stringify(data)
        });
    },

};

// We create a function that will run when the login
// button is hit
var handleFormSubmit = function (event) {
    event.preventDefault();
    var isValid = validationCheck();
        if(isValid === false){
            return;
        }
    // We get rid of all spaces before and after 
    // username and password with trim()
    var login = {
        userName: $userName.val().trim(),
        password: $password.val().trim(),

    };

    // We send the username and password to the server
    // to validate the data, we go to the create page 
    // when we are successful or go get an alert if the
    // credentials do not exist
    API.login(login).then(function (response) {
        console.log(response);
        if (response.length > 0) {
            $userName.val("");
            userInfo = {userName: response[0].userName, id: response[0].id};
            var userInfo = JSON.stringify(userInfo);
            localStorage.setItem("user", userInfo);
            window.location.href = "/create";
        }
        else {
            $userName.addClass("invalid")
            userNameInputLabel.html("User does not exist");
            userNameInputLabel.css("color", "red");
            $userName.val("");
            $password.val("");
        }
    });

};

// We create a function that will run when the login
// button is hit
var handleFormCreate = function (event) {
    event.preventDefault();
    var isValid = validationCheck();
    if(isValid === false){
        return;
    }
    // We get rid of all spaces before and after 
    // username and password with trim()
    var login = {
        userName: $userName.val().trim().toLowerCase(),
        password: $password.val().trim()
    };

    // We send the username and password to the server
    // to validate the data, we go to the create page 
    // when we are successful or go get an alert if the
    // credentials do not exist
    API.create(login).then(function (response) {
        if (response[1] === true) {
            $userName.val("");
            userInfo = {userName: response[0].userName, id: response[0].id};
            var userInfo = JSON.stringify(userInfo)
            localStorage.setItem("user", userInfo);
            window.location.href = "/create";
        }
        else {
            $userName.addClass("invalid")
            userNameInputLabel.html("User name already exist");
            userNameInputLabel.css("color", "red");
            $userName.val("");
            $password.val("");
        }
    });

};

function validationCheck() {
    var userInput = $userName.val().trim().toLowerCase();
    var passwordInput = $password.val().trim();
    if(userInput === "") {
        $userName.addClass("invalid")
        return false
    }
    else if(passwordInput === "") {
        $password.addClass("invalid")
        return false
    } else {
        return true
    }
};
$submitBtn.on("click", handleFormSubmit);
$createBtn.on("click", handleFormCreate);


// (function ($) {
//     "use strict";


//     /*==================================================================
//     [ Focus input ]*/
//     $('.input100').each(function () {
//         $(this).on('blur', function () {
//             if ($(this).val().trim() != "") {
//                 $(this).addClass('has-val');
//             }
//             else {
//                 $(this).removeClass('has-val');
//             }
//         })
//     })


//     /*==================================================================
//     [ Validate ]*/
//     var input = $('.validate-input .input100');

//     $('.validate-form').on('submit', function () {
//         var check = true;

//         for (var i = 0; i < input.length; i++) {
//             if (validate(input[i]) == false) {
//                 showValidate(input[i]);
//                 check = false;
//             }
//         }

//         return check;
//     });


//     $('.validate-form .input100').each(function () {
//         $(this).focus(function () {
//             hideValidate(this);
//         });
//     });

//     function validate(input) {
//         if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//             if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//                 return false;
//             }
//         }
//         else {
//             if ($(input).val().trim() == '') {
//                 return false;
//             }
//         }
//     }

//     function showValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).addClass('alert-validate');
//     }

//     function hideValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).removeClass('alert-validate');
//     }

//     /*==================================================================
//     [ Show pass ]*/
//     var showPass = 0;
//     $('.btn-show-pass').on('click', function () {
//         if (showPass == 0) {
//             $(this).next('input').attr('type', 'text');
//             $(this).addClass('active');
//             showPass = 1;
//         }
//         else {
//             $(this).next('input').attr('type', 'password');
//             $(this).removeClass('active');
//             showPass = 0;
//         }

//     });


// })(jQuery);