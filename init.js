var mongoose = require('mongoose');
var User = require('./model/User.js');
var Car = require('./model/Car.js');
mongoose.connect('mongodb://localhost/carbuddy');
var user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: 'Firda',
    email: 'firda@firda.com',
    password: 'firda'
})

user.save(function(err){
    if (!err){
        var car = new Car({
            owner: user._id,
            car_type: 'a',
            car_year: 2000,
            car_brand: 'b'
        })
        car.save(function(err){
            if (!err){
                console.log(user + car)
                console.log('berhasil')
            }
        })
    }
})