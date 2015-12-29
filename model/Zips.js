var mongoose = require('mongoose');

// var medicalDataSchema = new mongoose.Schema({
//   Street : String,
//   City   : String,
//   State  : String
// }, { collection : 'medical_data' });

// medicalDataSchema.methods.sayHello = function() {
// 	console.log('sup');
// };


// var medical_data = mongoose.model('medical_data', medicalDataSchema);
// // Make this available to our other files
// module.exports = medical_data;


var zipsSchema = new mongoose.Schema({
  zip : Number
}, { collection : 'zips' });


var zips = mongoose.model('zips', zipsSchema);
// Make this available to our other files
module.exports = zips;