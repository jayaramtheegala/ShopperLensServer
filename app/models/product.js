/*
	Database Model for storing product reviews.
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var review = new Schema({
	ObjectId : Schema.ObjectId,
	productName : String,
	rating : Number,
	review : String,
	name : String
},{ collection: 'review' });

module.exports = mongoose.model('Review', review);
