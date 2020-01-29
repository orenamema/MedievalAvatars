module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: DataTypes.STRING,
        password: DataTypes.STRING
    });
    Users.associate = function(models) {
        Users.belongsToMany(models.Avatars, {through: 'UsersAvatars', as: "Users"});
      };
    return Users;
  };