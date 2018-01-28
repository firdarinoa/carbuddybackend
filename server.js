var express = require('express'),
	bodyParser = require('body-parser')
var app = express()
var mongoose = require('mongoose');
var User = require('./model/User.js');
var Car = require('./model/Car.js');
mongoose.connect('mongodb://localhost/carbuddy');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(8080, function(){
	console.log('server berjalan di 8000')	
})

app.get('/', function(request,response){
	User.find(function(err, data){
		response.json(data)
	})
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