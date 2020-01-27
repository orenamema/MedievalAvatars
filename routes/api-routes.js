const db = require("../models");

module.exports = app => {
    app.post("/api/create", function(req,res){
        db.Avatars.create(req.body, function(dtat){
            res.json(dtat)
        })
        req.body
    })
}