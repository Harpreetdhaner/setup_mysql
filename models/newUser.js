// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// const Contact = sequelize.define('Contact', {
//   // Model attributes are defined here
//   address: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   phone: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   },
//   email:{
//     type: DataTypes.STRING
//   }
// }, {
//   // Other model options go here
// });
// module.exports = Contact
// console.log(Contact === sequelize.models.Contact); // true

const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
  class Contact extends Model {}
  Contact.init({
          firstname: {
            type: DataTypes.STRING(255),
            allowNull: false
          },
          email: {
            type: DataTypes.STRING(255),
            allowNull: false
          },
          address: {
            type: DataTypes.STRING(255),
            allowNull: false
          }
  }, { sequelize, modelName: 'Contact' });
  
  module.exports = Contact;
  return Contact;
};
