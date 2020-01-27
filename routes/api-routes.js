const db = require("../models");

module.exports = app => {
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


// /api/social-class/ for carousel