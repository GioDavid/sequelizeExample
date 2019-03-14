'use strict';
module.exports = (sequelize, DataTypes) => {
  const person = sequelize.define('person', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    ip_address: DataTypes.STRING
  }, {});
  person.associate = function(models) {
    // associations can be defined here
  };
  return person;
};