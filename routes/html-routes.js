const db = require("../models");

module.exports = app => {
    app.get("/",(req,res) => {
        res.render("loginPage");
    });

    app.get("/all",(req,res) => {
        db.Avatars.findAll(
            {
                include: [
                    {
                        model: db.AvatarClasses, 
                        as: "AvatarClasses",
                        required: true
                    }
                ]
            }).then(function(data){
            res.render("viewAvatar", {avatars: data});
        })
    });
    app.get("/create",(req,res) => {
        res.render("createAvatar");
    });

}