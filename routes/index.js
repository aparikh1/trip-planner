var express = require('express');
var router = express.Router();
var Hotel = require('../models').Hotel;
var Place = require('../models').Place;
var ThingToDo = require('../models').ThingToDo;
var Restaurant = require('../models').Restaurant;


/* GET home page. */
router.get('/', function(req, res, next) {

	Hotel.find({}, function(err, hotels) {
	    Restaurant.find({}, function(err, restaurants) {
	    	// console.log('restaurants', restaurants);
	        ThingToDo.find({}, function(err, thingsToDo) {
	        	// console.log('thingsToDo', thingsToDo);
	        	console.log('test', hotels[0]);
	            res.render('layout', {
	                all_hotels: hotels,
	                all_restaurants: restaurants,
	                all_things_to_do: thingsToDo
	            });
	        });
	    });
	});

});



router.get('/bower_components', function(req, res, next) {
	console.log('test');
	
})


module.exports = router;