const db = require("../models");

module.exports = app => {
    app.post("/api/create", function(req,res){
        db.Avatars.create(req.body, function(dtat){
            res.json(dtat)
        })
        req.body
    })
    app.get("/api/classes/:name", function(req, res) {
        db.AvatarClasses.findAll(
            {
                where:{
                    socialClass: req.params.name
                }
        }).then(function(data){
            res.json(data);
        })
    })
}

