var db = require("../models");

function createMock(){
        var mockData = {
        "Users": {"userName": "test_user",
                "password": "test_password",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
        "AvatarClasses": [
                {"career": "sheriff",
                "socialClass": "authority",
                "img": "/images/authorityClass/sheriff.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "bishop",
                "socialClass": "clergy",
                "img": "/images/clergyClass/bishop.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "artisan",
                "socialClass": "merchant",
                "img": "/images/merchantClass/merchant.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "calvarly",
                "socialClass": "military",
                "img": "/images/militaryClass/cavalry.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "nobleman",
                "socialClass": "nobility",
                "img": "/images/nobilityClass/nobleman.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "bard",
                "socialClass": "peasantry",
                "img": "/images/peasantryClass/bard.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "king",
                "socialClass": "royal",
                "img": "/images/royalClass/king.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
        ],                
        "Avatars": [
                {"name": "test_name",
                "age": 10,
                "personality": "test_personality",
                "backstory": "test_backstory",
                "details": "test_details",
                "AvatarClassesId": 1,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "test_name2",
                "age": 22,
                "personality": "test_personality2",
                "backstory": "test_backstory2",
                "details": "test_details2",
                "AvatarClassesId": 2,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "test_name3",
                "age": 33,
                "personality": "test_personality3",
                "backstory": "test_backstory3",
                "details": "test_details3",
                "AvatarClassesId": 3,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "test_name4",
                "age": 44,
                "personality": "test_personality4",
                "backstory": "test_backstory4",
                "details": "test_details4",
                "AvatarClassesId": 4,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "test_name5",
                "age": 55,
                "personality": "test_personality5",
                "backstory": "test_backstory5",
                "details": "test_details5",
                "AvatarClassesId": 5,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "test_name6",
                "age": 66,
                "personality": "test_personality6",
                "backstory": "test_backstory6",
                "details": "test_details6",
                "AvatarClassesId":6,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "test_name7",
                "age": 77,
                "personality": "test_personality7",
                "backstory": "test_backstory7",
                "details": "test_details7",
                "AvatarClassesId":7,
                "createdAt": Date(), 
                "updatedAt": Date()
                }
        ]
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
                db.AvatarClasses.bulkCreate(mockData.AvatarClasses).then(function(dbExample) {
                        console.log(`STORED AvatarClasses!!`);
                        db.Avatars.bulkCreate(mockData.Avatars).then(function(dbExample) {
                                console.log(`STORED Avatars!!`);
                        });
                });
        });

}
module.exports = createMock;
