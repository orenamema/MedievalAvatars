var db = require("../models");

function createMock(){
        var mockData = {
        "Users": {"userName": "test_user",
                "password": "test_password",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
        "AvatarClasses": {"career": "test_career",
                "socialClass": "test_socialClass",
                "img": "test_img",
                "createdAt": Date(), 
                "updatedAt": Date()
                },                
        "Avatars": {"name": "test_name",
                "age": 10,
                "personality": "test_personality",
                "backstory": "test_backstory",
                "details": "test_details",
                "AvatarClassesId": 1,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
        // "Avatars": {"userName": "test_user",
        //         "password": "test_password",
        //         "createdAt": Date(), 
        //         "updatedAt": Date()
        //         },
        // "AvatarClasses": {"userName": "test_user",
        //         "password": "test_password",
        //         "createdAt": Date(), 
        //         "updatedAt": Date()
        //         },
        };


        db.Users.create(mockData.Users).then(function(dbExample) {
                console.log(`STORED Users!!`);
                db.AvatarClasses.create(mockData.AvatarClasses).then(function(dbExample) {
                        console.log(`STORED AvatarClasses!!`);
                        db.Avatars.create(mockData.Avatars).then(function(dbExample) {
                                console.log(`STORED Avatars!!`);
                        });
                });
        });

}
module.exports = createMock;
