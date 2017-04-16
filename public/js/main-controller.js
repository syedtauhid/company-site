'use strict';

app.controller('mainCtrl', ['$http', '$rootScope', 'ngDialog', '$document', '$timeout', '$scope',
	'screenSize',
	function($http, $rootScope, ngDialog, $document, $timeout, $scope, screenSize) {


		//Mobile screenSize
		$scope.isShow = false;
		$scope.isMobile = screenSize.is('xs, sm');
		$scope.isMobile = screenSize.onChange($scope, 'xs, sm', function(isMatch) {
			$scope.isMobile = isMatch;
		});

		//console.log($scope.isMobile);





		$rootScope.jsonData = '{"foo": "bar"}';
		$rootScope.theme = 'ngdialog-theme-default';

		$scope.directivePreCloseCallback = function(value) {
			if (confirm('Close it? MainCtrl.Directive. (Value = ' + value + ')')) {
				return true;
			}
			return false;
		};

		$scope.preCloseCallbackOnScope = function(value) {
			if (confirm('Close it? MainCtrl.OnScope (Value = ' + value + ')')) {
				return true;
			}
			return false;
		};

		$scope.open = function() {
			var new_dialog = ngDialog.open({
				id: 'fromAService',
				template: 'firstDialogId',
				controller: 'InsideCtrl',
				data: {
					foo: 'from a service'
				}
			});
			// example on checking whether created `new_dialog` is open
			$timeout(function() {
				console.log(ngDialog.isOpen(new_dialog.id));
			}, 2000)
		};

		//Service details
		$scope.agileDetails = function() {
			ngDialog.open({
				template: 'agileDetailsId',
				controller: 'InsideCtrl',
				className: 'ngdialog-theme-default'
			});
		};

		//Service details
		$scope.lowCostDetails = function() {
			ngDialog.open({
				template: 'lowDetailsId',
				controller: 'InsideCtrl',
				className: 'ngdialog-theme-default'
			});
		};

		//Service details
		$scope.yourControllDetails = function() {
			ngDialog.open({
				template: 'yourControllDetailsId',
				controller: 'InsideCtrl',
				className: 'ngdialog-theme-default'
			});
		};



		//about us details
		$scope.aboutDetailsView = function() {
			ngDialog.open({
				template: 'aboutDetails',
				controller: 'InsideCtrl',
				className: 'ngdialog-theme-default'
			});
		};

	}
]);


app.controller('InsideCtrl', function($scope, ngDialog) {
	$scope.dialogModel = {
		message: 'message from passed scope'
	};
	$scope.openSecond = function() {
		ngDialog.open({
			template: '<h3><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
			plain: true,
			closeByEscape: false,
			controller: 'SecondModalCtrl'
		});
	};
});

app.controller('InsideCtrlAs', function() {
	this.value = 'value from controller';
});

app.controller('SecondModalCtrl', function($scope, ngDialog) {
	$scope.closeSecond = function() {
		ngDialog.close();
	};
});
