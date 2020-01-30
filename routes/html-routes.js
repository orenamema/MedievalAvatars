const db = require("../models");
const Sequelize = require('sequelize');

module.exports = app => {
    app.get("/", (req, res) => {
        res.render("loginPage");
    });

    app.get("/all", (req, res) => {
        db.Avatars.findAll(
            {
                include: [
                    {
                        model: db.AvatarClasses,
                        as: "AvatarClasses",
                        required: true
                    }
                ]
            }).then(function (data) {
                res.render("viewAvatar", { avatars: data });
            })
    });

    app.get("/all/:id", (req, res) => {
        db.UsersAvatars.findAll(
            {
                where: {
                    UserId: req.params.id
                }
            }
        ).then(function (data) {
            var arrayIds = [];
            data.forEach(element => {
                arrayIds.push(JSON.stringify(element.dataValues.AvatarId));
            });
            db.Avatars.findAll(
                {
                    where: {
                        id: { [Sequelize.Op.in]: arrayIds }
                    },
                    include: [
                        {
                            model: db.AvatarClasses,
                            as: "AvatarClasses",
                            required: true
                        }
                    ]
                }).then(function (datas) {
                    datas.forEach(element => {
                        element["ownAvatars"] = true
                    });
                    res.render("viewAvatar", { avatars: datas });
                })
        })
    });

    app.get("/create", (req, res) => {
        res.render("createAvatar");
    });

}