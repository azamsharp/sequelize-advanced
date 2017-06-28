'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isAlpha: true 
      }
    }
  }, {});

  post.associate = function(models) {
                                 // post.comments
    post.hasMany(models.comment,{as : 'comments',foreignKey: 'postId'})
  }


  return post;
};
