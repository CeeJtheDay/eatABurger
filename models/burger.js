module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burger", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return burger;
  };