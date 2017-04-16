(function() {
	'use strict';

	angular
		.module('ngApp')
		.directive('headerSection', HeaderSectionDirective);

	HeaderSectionDirective.$inject = [];

	function HeaderSectionDirective() {
		var directive = {};
		directive.restrict = 'E';
		directive.templateUrl = '/app/layout/main/html/header-section-directive.html';
		return directive;
	}
})();
