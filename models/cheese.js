var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CheeseSchema = new Schema({
	name : {type : String, default: ''},
	rating: {type: Number, default: ''},
	type: {type : String, default: ''},
	country: {type: String, default: ''},
	region: {type: String, default: ''},
	description: {type: String, default: ''},
	image: {type: String, default: ''}
});


CheeseSchema.statics.all = function all(cb) {
	return
		this.model.find({})
		.catch(function(err) {
			console.log(err);
		})
		.then(function(images) {
			cb(images);
		})
		;
};

var Cheese = mongoose.model('Cheese', CheeseSchema);
module.exports = Cheese;
