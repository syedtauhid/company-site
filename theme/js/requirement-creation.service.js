(function() {
	'use strict';

	angular
		.module('ngApp')
		.factory('RequirementCreationService', RequirementCreationService);

	RequirementCreationService.$inject = ['$resource'];

	function RequirementCreationService($resource) {
		var resources = {};
		resources.applyToJob = $resource(
			'/api/create-requirement/', {}, {
				post: {
					method: 'POST'
				}
			}
		);
		return resources;
	}
})();
