module.exports = function(sequelize, DataTypes) {
    var Avatars = sequelize.define("Avatars", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        career: DataTypes.STRING,
        socialClass: DataTypes.STRING,
        personality: DataTypes.STRING,
        history: DataTypes.TEXT,
        age: DataTypes.INTEGER,
        details: DataTypes.TEXT,
        img: DataTypes.STRING
    });


    
    Avatars.associate = function(models) {
        Avatars.belongsToMany(models.Users, {through: 'UsersAvatars'});
        // Avatars.hasMany(models.Users, {
        //     foreignKey: {
        //       allowNull: false
        //     }
        //   });
      };

    return Avatars;
  };
  