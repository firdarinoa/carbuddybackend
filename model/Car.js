var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	autoIncrement = require('mongoose-auto-increment'),
    connection = mongoose.createConnection('mongodb://localhost:27017/carbuddy'),
	Car = new Schema({
		owner: {type:Schema.Types.ObjectId, ref: 'User'},
		car_type: {type:String,required:true},
		car_year: {type:Number, required:true},
		car_brand: {type:String, required:true}
	})
autoIncrement.initialize(connection)
Car.plugin(autoIncrement.plugin, 'Car')
module.exports = mongoose.model('Car', Car);