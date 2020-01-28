const db = require("../models");

module.exports = app => {
    app.post("/api/create/:userId", function(req,res){
        db.Avatars.create(req.body, function(data){
            res.json(data)
            db.UsersAvatars.create({
                UserId: req.params.UserId,
                AvatarId: data.id
            })
        })
        req.body
    });
    app.get("/api/classes/:name", function(req, res) {
        db.AvatarClasses.findAll(
            {
                where:{
                    socialClass: req.params.name
                }
        }).then(function(data){
            res.json(data);
        })
    });

    // login route
    app.post("/api/login/", function(req,res){
        // We query the database to find the username
        // and password we received in the request
        db.Users.findAll({
            where: {
                userName: req.body.userName,
                password: req.body.password
            }
        }).then(function(login) {
            // should we find an existing record, we send 
            // back a response "success" or "fail" otherwise
            if (login.length > 0) {
                var response = "success";
            }
            else{
                var response = "fail";
            }
            res.send(response);
        });
    });

    // Create a new User
    app.post("/api/createAccount", function(req, res) {
        console.log(JSON.stringify(req.body));
        db.Users.create({
            userName: req.body.userName,
            password: req.body.password,
            createdAt: Date(),
            updatedAt: Date(),
        }).then(function() {
            res.send("success");
        });
    });    

}

