(function() {
	'use strict';

	angular
		.module('ngApp')
		.directive('footerSection', FooterSectionDirective);

	FooterSectionDirective.$inject = [];

	function FooterSectionDirective() {
		var directive = {};
		directive.scope = {};
		directive.restrict = 'E';
		directive.templateUrl = '/app/layout/main/html/footer-section-directive.html';
		return directive;
	}
})();
