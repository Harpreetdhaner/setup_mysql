// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('User', {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement:true
//     },
//     name: {
//       type: DataTypes.STRING(255),
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING(255),
//       allowNull: false
//     },
//     password: {
//       type: DataTypes.STRING(255),
//       allowNull: false
//     }
//   }, {
//     sequelize,
//     tableName: 'User',
//     timestamps: true
//   });
// };

const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class User extends Model {}
  User.init({
    id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
          },
          name: {
            type: DataTypes.STRING(255),
            allowNull: false
          }
  }, { sequelize, modelName: 'user' });
  
  return User;
};