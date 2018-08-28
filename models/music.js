'use strict';
module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define('Music', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Music.associate = function(models) {
    // associations can be defined here
  };
  return Music;
};