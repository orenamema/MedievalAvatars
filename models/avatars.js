module.exports = function(sequelize, DataTypes) {
    var Avatars = sequelize.define("Avatars", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        personality: DataTypes.STRING,
        backstory: DataTypes.TEXT,
        details: DataTypes.TEXT
    });


    
    Avatars.associate = function(models) {
        Avatars.belongsToMany(models.Users, {through: 'UsersAvatars'});
        Avatars.belongsTo(models.AvatarClasses, {as: "AvatarClasses"});
      };

    return Avatars;
  };
  