var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
	User = new Schema({
		cars: {type:Schema.Types.ObjectId, ref: 'Car'},
		name: {type:String, required: true},
		email: {type:String, required: true},
		password: {type:String, required:true}
	})
module.exports = mongoose.model('User', User)