var db = require("../models");

function createMock(){
        var mockData = {
        "Users": {"userName": "test_user",
                "password": "test_password",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
        "AvatarClasses": [
                {"career": "treasurer",
                "socialClass": "authority",
                "img": "/images/authorityClass/treasurer.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "executioner",
                "socialClass": "authority",
                "img": "/images/authorityClass/executioner.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "town-crier",
                "socialClass": "authority",
                "img": "/images/authorityClass/town-crier.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
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
                {"career": "dean",
                "socialClass": "clergy",
                "img": "/images/clergyClass/dean.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "paladin",
                "socialClass": "clergy",
                "img": "/images/clergyClass/paladin.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "priest",
                "socialClass": "clergy",
                "img": "/images/clergyClass/priest.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "artisan",
                "socialClass": "merchant",
                "img": "/images/merchantClass/artisan.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "apprentice",
                "socialClass": "merchant",
                "img": "/images/merchantClass/apprentice.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "merchant",
                "socialClass": "merchant",
                "img": "/images/merchantClass/merchant.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "bannerman",
                "socialClass": "military",
                "img": "/images/militaryClass/bannerman.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "soldier",
                "socialClass": "military",
                "img": "/images/militaryClass/soldier.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "constable",
                "socialClass": "military",
                "img": "/images/militaryClass/constable.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "nobleman",
                "socialClass": "nobility",
                "img": "/images/nobilityClass/nobleman.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "noblewoman",
                "socialClass": "nobility",
                "img": "/images/nobilityClass/noblewoman.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "bard",
                "socialClass": "peasantry",
                "img": "/images/peasantryClass/bard.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "beggar",
                "socialClass": "peasantry",
                "img": "/images/peasantryClass/beggar.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "cook",
                "socialClass": "peasantry",
                "img": "/images/peasantryClass/cook.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "farmer",
                "socialClass": "peasantry",
                "img": "/images/peasantryClass/farmer.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "prince",
                "socialClass": "royal",
                "img": "/images/royalClass/prince.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "king",
                "socialClass": "royal",
                "img": "/images/royalClass/king.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "queen",
                "socialClass": "royal",
                "img": "/images/royalClass/queen.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"career": "princess",
                "socialClass": "royal",
                "img": "/images/royalClass/princess.png",
                "createdAt": Date(), 
                "updatedAt": Date()
                }
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
                "AvatarClassesId": 5,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "test_name3",
                "age": 33,
                "personality": "test_personality3",
                "backstory": "test_backstory3",
                "details": "test_details3",
                "AvatarClassesId": 9,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "test_name4",
                "age": 44,
                "personality": "test_personality4",
                "backstory": "test_backstory4",
                "details": "test_details4",
                "AvatarClassesId": 12,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "test_name5",
                "age": 55,
                "personality": "test_personality5",
                "backstory": "test_backstory5",
                "details": "test_details5",
                "AvatarClassesId": 15,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "test_name6",
                "age": 66,
                "personality": "test_personality6",
                "backstory": "test_backstory6",
                "details": "test_details6",
                "AvatarClassesId": 18,
                "createdAt": Date(), 
                "updatedAt": Date()
                },
                {"name": "test_name7",
                "age": 77,
                "personality": "test_personality7",
                "backstory": "test_backstory7",
                "details": "test_details7",
                "AvatarClassesId": 23,
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
