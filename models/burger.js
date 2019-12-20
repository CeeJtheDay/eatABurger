module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Must enter a valid burger name!"
          }
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }  
    }, {
      timestamps: false
    });
    return Burger;
  };