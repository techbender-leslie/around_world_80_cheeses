app.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider) {
	console.log('config');

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	$urlRouterProvider.otherwise("/");

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'templates/intro.html' 
	})

	.state('allcheeses', {
		url: '/cheeses',
		templateUrl: 'templates/home.html',
		controller: 'HomeController',
		controllerAs: 'index'
	});

	// .state('home', {
	// 	url: '/',
	// 	templateUrl: 'templates/home.html',
	// 	controller: 'HomeController',
	// 	controllerAs: 'index'
	// })
	// .state('intro', {
	// 	url: '/intro',
	// 	templateUrl: 'templates/intro.html',
	// });

}

app.service('Cheese', function($resource){
  return $resource('http://localhost:3000/api/cheeses/:id', { id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
});
