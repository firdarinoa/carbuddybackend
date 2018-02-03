var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	CarDetail = new Schema({
		date: {type:String,required:true},
		time: {type:String, required:true},
        avg_speed: {type:Number, required:true},
        avg_acceleration: {type:Number, required:true}
	})

module.exports = mongoose.model('CarDetail', CarDetail);