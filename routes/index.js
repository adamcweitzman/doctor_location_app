var express = require('express');
var router = express.Router();
var zips = require('../model/Zips')

router.get('/', function(req, res, next) {
	res.render('index');
 });

// router.get('/data', function(req, res, next) {
//     q = zips.distinct('zip')
//     q.exec(function(err, data) {
//     	res.json(data)
//     });
//  });

router.get('/data', function(req, res, next) {
    q = zips.find({}).limit(10)
    q.exec(function(err, data) {
    	res.json(data)
    });
 });

router.post('/upload', function(req, res, next) {
	console.log(req.body)
	res.render('map')
});

// router.get('/upload', function(req, res, next) {
// 	console.log(req.body.zip)
// 	res.render('map')
// });

router.get('/map', function(req, res, next) {
	if (req.param('houseNumber')) {
		// console.log(req.param('houseNumber'))
	}
	console.log(req.body.zipcode)
	res.render('map')
});


// router.get('/search', function(req, res, next) {
// 	// res.json(req.body.houseNumber)
// 	res.redirect('map')
// });


module.exports = router;
