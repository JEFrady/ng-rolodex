const Users = require('./Users')
const bookshelf = require('./bookshelf')

const Contacts = bookshelf.Model.extend({
  tableName: 'contacts',
  hasTimestamps: true,
  idAttribute: 'contact_id'
  // assigned_to: function () {
  //   return this.belongsTo(Users)
  // }
})

module.exports = Contacts