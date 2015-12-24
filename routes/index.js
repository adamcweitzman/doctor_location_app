var express = require('express');
var router = express.Router();
var medical_data = require('../model/Medical_Data')

router.get('/', function(req, res, next) {
	res.render('index');
 });

router.get('/data', function(req, res, next) {
    q = medical_data.find({'City':'SAN FRANCISCO'}).limit(10)
    q.exec(function(err, data) {
    	res.json(data)
    });
 });

router.get('/map', function(req, res, next) {
	if (req.param('houseNumber')) {
		// console.log(req.param('houseNumber'))
	}
	res.render('map')
});

router.post('/search', function(req, res, next) {
});

// router.get('/search', function(req, res, next) {
// 	// res.json(req.body.houseNumber)
// 	res.redirect('map')
// });


module.exports = router;
