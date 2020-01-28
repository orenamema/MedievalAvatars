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
    app.post("/api/login/", function(req,res){
        db.Users.findAll({
            where: {
                userName: req.body.userName,
                password: req.body.password
            }
        }).then(function(login) {
            if (login.length > 0) {
                var response = "success";
            }
            else{
                var response = "fail";
            }
            res.send(response);
        });
    });

}

