module.exports = function(sequelize, DataTypes) {
    var UsersAvatars = sequelize.define("UsersAvatars", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        UserId: {
            type: DataTypes.INTEGER,
            references: { model: 'Users', key: 'id' }
        },
        AvatarId : {
            type: DataTypes.INTEGER,
            references: { model: 'Avatars', key: 'id' }
        }
    });



    return UsersAvatars;
  };
  