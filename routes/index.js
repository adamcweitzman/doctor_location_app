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

//db.collection.find( { field: { $gt: value1, $lt: value2 } } );

router.post('/upload', function(req, res, next) {
	console.log(req.body.zipcode)
	var zipcode = req.body.zipcode
	var plus1 = zipcode + 1
	var plus2 = zipcode + 2
	var plus3 = zipcode + 3
	var minus1 = zipcode - 1
	var minus2 = zipcode - 2
	var minus3 = zipcode - 3
	q = zips.find({ 'zip':{$in:[zipcode,plus1,plus2,plus3,minus1,minus2,minus3]}});
	// q = zips.find({'zip':zipcode}).limit(10)
    q.exec(function(err, data) {
    	console.log(data)
    	res.json(data)
    });
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
