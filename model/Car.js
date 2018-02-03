var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Car = new Schema({
		owner: {type:Schema.Types.ObjectId, ref: 'User'},
		car_type: {type:String,required:true},
		car_year: {type:Number, required:true},
		car_brand: {type:String, required:true}
	})
module.exports = mongoose.model('Car', Car);