app.controller('HomeController', HomeController);

HomeController.$inject = ['Cheese'];

function HomeController(Cheese) {
	var vm = this;
	vm.homeTest = "Welcome to the homepage";
	// vm.cheeses = Cheese.query();
	
	vm.cheeses = Cheese.query();
	vm.cheese = {};

	vm.createCheese = function() {
		var newCheese = Cheese.save(vm.cheese);
		vm.cheese = {};
		vm.cheeses.unshift(newCheese);
	};

	vm.updateCheese = function(cheese) {
		Cheese.update(cheese);
		cheese.editForm = false;
	};

	vm.deleteCheese = function(cheese) {
		console.log(cheese);
		Cheese.remove({ id: cheese._id });
		var cheeseIndex = vm.cheeses.indexOf(cheese);
		vm.cheeses.splice(cheeseIndex, 1);
	};
}