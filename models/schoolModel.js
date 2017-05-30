// var Student = require('./index').Student


module.exports = function(sequelize, DataTypes) {
  var School = sequelize.define("School", {
    name: DataTypes.STRING,
    district: DataTypes.INTEGER,
    size: DataTypes.INTEGER,
    // SchoolId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        School.hasMany(models.Student)

      }
    }
  });

  return School;
};
