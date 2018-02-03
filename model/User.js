var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment'),
    connection = mongoose.createConnection('mongodb://localhost:27017/carbuddy'),
	User = new Schema({
		cars: {type:Schema.Types.ObjectId, ref: 'Car'},
		name: {type:String, required: true},
		email: {type:String, required: true},
		password: {type:String, required:true}
	})
autoIncrement.initialize(connection)
User.plugin(autoIncrement.plugin, 'User')
module.exports = mongoose.model('User', User)