var Cheese = require('../models/cheese');

var cheesesController = {
	index: function(req, res) {
		Cheese.find({}, function(err, cheeses) {
			res.status(200).send(JSON.stringify(cheeses.reverse()));
		});
	},

	create: function(req, res) {
		console.log(req.body)
			var name = req.body.name;
			var rating = req.body.rating;
			var type = req.body.type;
			var region =req.body.region;
			var country = req.body.country;
			var description = req.body.description;
			var image = req.body.image;

			Cheese.create({name: name, rating: rating, type: type, region: region, country: country, description: description, image: image}, function(err, image) {
				console.log('error from create', err);
			});
	},

	destroy: function(req, res) {
		Cheese.remove({_id: req.params.id}, function(err, cheese) {
			console.log(cheese);
			err ?
				res.status(500).send() :
				res.status(204).send(JSON.stringify(cheese));
		});
	}
};

module.exports = cheesesController;