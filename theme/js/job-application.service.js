(function() {
	'use strict';

	angular
		.module('ngApp')
		.factory('JobApplicationService', JobApplicationService);

	JobApplicationService.$inject = ['$resource'];

	function JobApplicationService($resource) {
		var resources = {};
		resources.applyToJob = $resource(
			'/api/job-application/', {}, {
				post: {
					method: 'POST'
				}
			}
		);
		return resources;
	}
})();
