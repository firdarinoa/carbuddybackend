var express = require('express'),
	bodyParser = require('body-parser')
var app = express()
var mongoose = require('mongoose');
var User = require('./model/User.js');
var Car = require('./model/Car.js');
var CarDetail = require('./model/CarDetail.js');
mongoose.connect('mongodb://localhost/carbuddy');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(8081, function(){
	console.log('server berjalan di 8000')	
})

app.get('/getCarList', function(req,res){
	// User.find(function(err, data){
	// 	res.json(data)
	// })

	// User
	// .findOne({name: "Firda"})
	// .populate('cars')
	// .exec(function(err,User){
	// 	console.log('Car Name:',User);
	// 	res.json(User);
	// });

	Car
	.findOne({car_type: "a"})
	.populate('owner')
	.exec(function(err,data){
		console.log('Car Name:',data);
		res.json(data);
	});
	
})

app.post('/register', function(req, res){
	console.log(req.body)
	var newUser = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	}) 
	newUser.save(function(err){
		if(!err){
			console.log('berhasil: ', newUser)
		} else {
			console.error(err)
		}
	})
})

app.post('/add_car', function(req,res){
	console.log(req.body)
	var newCar = new Car({
		car_type: req.body.car_type,
		car_year: req.body.car_year,
		car_brand: req.body.car_brand,

	})
	newCar.save(function(err){
		if(!err){
			console.log('berhasil :', newCar)
		} else {
			console.error(err)
		}
	})
})


app.post('/add_cardetail', function(req,res){
	console.log(req.body)
	var newCarDetail = new CarDetail({
		date: req.body.date,
		time: req.body.time,
		avg_speed: req.body.car_brand,
		avg_acceleration: req.body.car_brand,
	})
	newCar.save(function(err){
		if(!err){
			console.log('berhasil :', newCarDetail)
		} else {
			console.error(err)
		}
	})
})