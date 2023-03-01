// var DataTypes = require("sequelize").DataTypes;
// var _User = require("./User");

// function initModels(sequelize) {
//   var User = _User(sequelize, DataTypes);


//   return {
//     User,
//   };
// }
// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;

const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class NUser extends Model {}
  NUser.init({
          fname: {
            type: DataTypes.STRING(255),
            allowNull: false
          }
  }, { sequelize, modelName: 'user1' });
  
  return NUser;
};
