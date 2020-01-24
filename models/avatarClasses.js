module.exports = function(sequelize, DataTypes) {
    var AvatarClasses = sequelize.define("AvatarClasses", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        career: DataTypes.STRING,
        socialClass: DataTypes.STRING,
        img: DataTypes.STRING
    });

    return AvatarClasses;
  };
  