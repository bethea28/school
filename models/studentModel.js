
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    grade: DataTypes.INTEGER,
    // SchoolId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Student.belongsTo(models.User);
        // Student.belongsTo(models.User, {
        //   onDelete: "CASCADE",
        //   foreignKey: {
        //     allowNull: false
        //   }
        // });
      }
    }
  });

  return Student;
};
