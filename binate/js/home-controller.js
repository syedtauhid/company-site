'use strict';


app.controller('homeController', ['$http', '$rootScope', '$document', '$scope',
    '$timeout', '$q', '$window', 'ngDialog',
    function($http, $rootScope, $document, $scope, $timeout, $q,
        $window, ngDialog) {


        $scope.countries = [
            'Afghanistan',
            'Albania',
            'Algeria',
            'Andorra',
            'Angola',
            'Antigua and Barbuda',
            'Argentina',
            'Armenia',
            'Aruba',
            'Australia',
            'Austria',
            'Azerbaijan',
            'Bahamas, The',
            'Bahrain',
            'Bangladesh',
            'Barbados',
            'Belarus',
            'Belgium',
            'Belize',
            'Benin',
            'Bhutan',
            'Bolivia',
            'Bosnia and Herzegovina',
            'Botswana',
            'Brazil',
            'Brunei',
            'Bulgaria',
            'Burkina Faso',
            'Burma',
            'Burundi',
            'Cambodia',
            'Cameroon',
            'Canada',
            'Cabo Verde',
            'Central African Republic',
            'Chad',
            'Chile',
            'China',
            'Colombia',
            'Comoros',
            'Congo, Democratic Republic of the',
            'Congo, Republic of the',
            'Costa Rica',
            'Croatia',
            'Cuba',
            'Curacao',
            'Cyprus',
            'Czechia',
            'Denmark',
            'Djibouti',
            'Dominica',
            'Dominican Republic',
            'East Timor (see Timor-Leste)',
            'Ecuador',
            'Egypt',
            'El Salvador',
            'Equatorial Guinea',
            'Eritrea',
            'Estonia',
            'Ethiopia',
            'Fiji',
            'Finland',
            'France',
            'Gabon',
            'Gambia, The',
            'Georgia',
            'Germany',
            'Ghana',
            'Greece',
            'Grenada',
            'Guatemala',
            'Guinea',
            'Guinea-Bissau',
            'Guyana',
            'Haiti',
            'Holy See',
            'Honduras',
            'Hong Kong',
            'Hungary',
            'Iceland',
            'India',
            'Indonesia',
            'Iran',
            'Iraq',
            'Ireland',
            'Israel',
            'Italy',
            'Jamaica',
            'Japan',
            'Jordan',
            'Kazakhstan',
            'Kenya',
            'Kiribati',
            'Korea, North',
            'Korea, South',
            'Kosovo',
            'Kuwait',
            'Kyrgyzstan',
            'Laos',
            'Latvia',
            'Lebanon',
            'Lesotho',
            'Liberia',
            'Libya',
            'Liechtenstein',
            'Lithuania',
            'Luxembourg',
            'Macau',
            'Macedonia',
            'Madagascar',
            'Malawi',
            'Malaysia',
            'Maldives',
            'Mali',
            'Malta',
            'Marshall Islands',
            'Mauritania',
            'Mauritius',
            'Mexico',
            'Micronesia',
            'Moldova',
            'Monaco',
            'Mongolia',
            'Montenegro',
            'Morocco',
            'Mozambique',
            'Namibia',
            'Nauru',
            'Nepal',
            'Netherlands',
            'New Zealand',
            'Nicaragua',
            'Niger',
            'Nigeria',
            'North Korea',
            'Norway',
            'Oman',
            'Pakistan',
            'Palau',
            'Palestinian Territories',
            'Panama',
            'Papua New Guinea',
            'Paraguay',
            'Peru',
            'Philippines',
            'Poland',
            'Portugal',
            'Qatar',
            'Romania',
            'Russia',
            'Rwanda',
            'Saint Kitts and Nevis',
            'Saint Lucia',
            'Saint Vincent and the Grenadines',
            'Samoa',
            'San Marino',
            'Sao Tome and Principe',
            'Saudi Arabia',
            'Senegal',
            'Serbia',
            'Seychelles',
            'Sierra Leone',
            'Singapore',
            'Sint Maarten',
            'Slovakia',
            'Slovenia',
            'Solomon Islands',
            'Somalia',
            'South Africa',
            'South Korea',
            'South Sudan',
            'Spain',
            'Sri Lanka',
            'Sudan',
            'Suriname',
            'Swaziland',
            'Sweden',
            'Switzerland',
            'Syria',
            'Taiwan',
            'Tajikistan',
            'Tanzania',
            'Thailand',
            'Timor-Leste',
            'Togo',
            'Tonga',
            'Trinidad and Tobago',
            'Tunisia',
            'Turkey',
            'Turkmenistan',
            'Tuvalu',
            'Uganda',
            'Ukraine',
            'United Arab Emirates',
            'United Kingdom',
            'Uruguay',
            'Uzbekistan',
            'Vanuatu',
            'Venezuela',
            'Vietnam',
            'Yemen',
            'Zambia',
            'Zimbabwe'
        ];

        //Toggle item
        $scope.$window = $window;
        $scope.open = false;
        $scope.openTwo = false;

        $scope.genericSinglePropertyValueChecker = function(data,
            propertyName) {
            $scope[propertyName + 'Error'] = false;
            if((typeof data[propertyName]) == 'undefined' || data[
                    propertyName] === null || data[propertyName] ===
                '') {
                $scope[propertyName + 'Error'] = true;
                return false;
            }
            return true;
        };

        $scope.checkForQuotationValidation = function(data) {
            var res = true;
            $scope.contactError = false;
            if((typeof data.callRequested) == 'undefined' || data.callRequested ==
                null || data.callRequested == false) {
                if((typeof data.emailRequested) == 'undefined' ||
                    data.emailRequested == null || data.emailRequested ==
                    false) {
                    $scope.contactError = true;
                    res = false;
                }
            }
            var genericPropertyNameList = ['fullName', 'email',
                'message'
            ];
            if(data.callRequested) {
                genericPropertyNameList.push('phoneNumber');
            } else {
                $scope['phoneNumberError'] = false;
            }
            for(var i = 0; i < genericPropertyNameList.length; i++) {
                if($scope.genericSinglePropertyValueChecker(data,
                        genericPropertyNameList[i]) == false) {
                    res = false;
                }
            }
            return res;
        };

        $scope.phoneNumber = '';
        $scope.callRequested = false;
        $scope.emailRequested = false;
        $scope.fileBeingAddedForUpload = null;
        $scope.files = [];
        $scope.selectedTechnologyList = [];
        $scope.technologyList = [{
            name: 'NET',
            key: 'NET'
        }, {
            name: 'Ajax',
            key: 'Ajax'
        }, , {
            name: 'CSS',
            key: 'CSS'
        }, , {
            name: 'Delphi',
            key: 'Delphi'
        }, , {
            name: 'Flash',
            key: 'Flash'
        }, {
            name: 'JSP',
            key: 'JSP'
        }, {
            name: 'Java',
            key: 'Java'
        }, {
            name: 'Drupal',
            key: 'Drupal'
        }, {
            name: 'MySQL',
            key: 'MySQL'
        }, {
            name: 'PHP',
            key: 'PHP'
        }, {
            name: 'Python',
            key: 'Python'
        }, {
            name: 'VB',
            key: 'VB'
        }, {
            name: 'XML',
            key: 'XML'
        }, {
            name: 'F',
            key: 'F'
        }, {
            name: 'Share Point',
            key: 'Share_Point'
        }, {
            name: 'ASP',
            key: 'ASP'
        }, {
            name: 'C++',
            key: 'C_C_plus_plus'
        }, {
            name: 'CFusion',
            key: 'CFusion'
        }, {
            name: 'DHTML',
            key: 'DHTML'
        }, {
            name: 'Flex',
            key: 'Flex'
        }, {
            name: 'Javascript',
            key: 'Javascript'
        }, {
            name: 'Joomla',
            key: 'Joomla'
        }, {
            name: 'MS SQL',
            key: 'MS_SQL'
        }, {
            name: 'Oracle',
            key: 'Oracle'
        }, {
            name: 'Perl CGI',
            key: 'Perl_CGI'
        }, {
            name: 'Scripts',
            key: 'Scripts'
        }, {
            name: 'XHTML',
            key: 'XHTML'
        }, {
            name: 'C#',
            key: 'C_sharp'
        }, {
            name: 'Objective C',
            key: 'Objective_C'
        }, {
            name: 'Ruby on Rails',
            key: 'Ruby_on_Rails'
        }, {
            name: 'Android',
            key: 'Android'
        }, {
            name: 'Windows Mobile',
            key: 'Windows_Mobile'
        }, {
            name: 'Symbian',
            key: 'Symbian'
        }, {
            name: 'Apple',
            key: 'Apple'
        }, {
            name: 'Blackberry',
            key: 'Blackberry'
        }, {
            name: 'Palm OS',
            key: 'Palm_OS'
        }];
        $scope.technologyList = $scope.technologyList.sort(function(
            left, right) {
            return(left.name < right.name) ? -1 : (left.name >
                right.name) ? 1 : 0;
        });

        $scope.submittedQuotation = function() {
            var data;
            $scope.isSubmitButtonDisabled = true;

            data = {};
            data['message'] = $scope.message;
            data['fullName'] = $scope.fullName;
            data['email'] = $scope.email;
            data['phoneNumber'] = $scope.phoneNumber;
            data['callRequested'] = $scope.for_phone;
            data['emailRequested'] = $scope.for_email;
            data['technologies'] = [];
            for(var i = 0; i < $scope.technologyList.length; i++) {
                var item = $scope.technologyList[i];
                if((typeof item) != 'undefined' && item != null &&
                    (typeof $scope[item.key]) != 'undefined' &&
                    $scope[item.key] !=
                    null && $scope[item.key] == true) {
                    data['technologies'].push(item);
                }
            }
            $scope.selectedTechnologyList = data['technologies'];
            if($scope.checkForQuotationValidation(data)) {
                for(var i = 0; i < data['technologies'].length; i++) {
                    data['technologies'][i] = data['technologies'][
                        i
                    ].name;
                }
                data['technologies'] = data['technologies'].join(
                    ', ');
                $http.post('/api/create-requirement/', data, {}).then(
                    function(success) {
                        $scope.afterSubmit = $scope.afterSubmit ?
                            false : true;
                        $scope.quotationRequestError = false;
                        $scope.isSubmitButtonDisabled = false;
                    },
                    function(err) {
                        $scope.afterSubmit = $scope.afterSubmit ?
                            false : true;
                        $scope.quotationRequestError = true;
                        $scope.isSubmitButtonDisabled = false;
                    });
            } else {
                $scope.isSubmitButtonDisabled = false;
            }
        };

        $scope.submitSalesQuery = function() {
            var data;
            $scope.isSubmitButtonDisabled = true;

            data = {};
            data['message'] = $scope.message;
            data['fullName'] = $scope.fullName;
            data['email'] = $scope.email;
            data['phoneNumber'] = $scope.phoneNumber;
            data['callRequested'] = $scope.for_phone;
            data['emailRequested'] = $scope.for_email;
            if($scope.checkForQuotationValidation(data)) {
                $http.post('/api/create-sales-query/', data, {}).then(
                    function(success) {
                        $scope.afterSubmit = $scope.afterSubmit ?
                            false : true;
                        $scope.quotationRequestError = false;
                        $scope.isSubmitButtonDisabled = false;
                    },
                    function(err) {
                        $scope.afterSubmit = $scope.afterSubmit ?
                            false : true;
                        $scope.quotationRequestError = true;
                        $scope.isSubmitButtonDisabled = false;
                    });
            } else {
                $scope.isSubmitButtonDisabled = false;
            }
        };



        $scope.technologyChanged = function(evnt) {
            var dataList;
            dataList = [];
            for(var i = 0; i < $scope.technologyList.length; i++) {
                var item = $scope.technologyList[i];
                if((typeof item) != 'undefined' && item != null &&
                    (typeof $scope[item.key]) != 'undefined' &&
                    $scope[item.key] !=
                    null && $scope[item.key] == true) {
                    dataList.push(item);
                }
            }
            $scope.selectedTechnologyList = dataList;
        };

        $scope.removeTechnology = function(idx) {
            var tech = $scope.selectedTechnologyList[idx];
            $scope[tech.key] = false;
            $scope.selectedTechnologyList.splice(idx, 1);
        };

        $scope.checkForJobApplicationValidation = function(data) {
            var res = true;
            var genericPropertyNameList = ['fullName', 'email',
                'message', 'phoneNumber', 'position'
            ];
            for(var i = 0; i < genericPropertyNameList.length; i++) {
                if($scope.genericSinglePropertyValueChecker(data,
                        genericPropertyNameList[i]) == false) {
                    res = false;
                }
            }
            $scope.fileUploadError = null;
            if($scope.files.length === 0) {
                $scope.fileUploadError =
                    "Please at least upload your CV.";
                res = false;
            }
            return res;
        };

        $scope.$watch('fileBeingAddedForUpload', function(newVal) {
            if(newVal) {}
        });

        $scope.submittedJobApplication = function() {
            var data;
            $scope.isSubmitButtonDisabled = true;
            data = {};
            data['message'] = $scope.message;
            data['fullName'] = $scope.fullName;
            data['email'] = $scope.email;
            data['phoneNumber'] = $scope.phoneNumber;
            data['position'] = $scope.position;
            data['files'] = $scope.files;
            if($scope.checkForJobApplicationValidation(data)) {
                $http.post('/api/job-application/', data, {}).then(
                    function(success) {
                        $scope.afterSubmit = $scope.afterSubmit ?
                            false : true;
                        $scope.jobApplicationRequestError =
                            false;
                        $scope.isSubmitButtonDisabled = false;
                        $scope.files = [];
                    },
                    function(err) {
                        $scope.afterSubmit = $scope.afterSubmit ?
                            false : true;
                        $scope.jobApplicationRequestError =
                            true;
                        $scope.isSubmitButtonDisabled = false;
                        $scope.files = [];
                    });
            } else {
                $scope.isSubmitButtonDisabled = false;
            }
        };

        $scope.$on('job-application-file-changed', function(event, args) {
            var found, allowedFileTypes, maxFileSize,
                maxNumberOfFiles, reader;
            maxFileSize = 15;
            maxNumberOfFiles = 3;
            found = false;
            allowedFileTypes = ['image/jpeg', 'image/png',
                'application/pdf'
            ];
            $scope.fileUploadError = null;
            for(var i = 0; i < $scope.files.length; i++) {
                $scope.fileUploadError =
                    'File with same name already exists.';
                if($scope.files[i].name == $scope.fileBeingAddedForUpload
                    .name) {
                    return;
                }
            }
            if($scope.files.length >= maxNumberOfFiles) {
                $scope.fileUploadError = 'Only ' +
                    maxNumberOfFiles +
                    ' files are allowed to be uploaded.';
                return;
            }
            for(var i = 0; i < allowedFileTypes.length; i++) {
                if($scope.fileBeingAddedForUpload.type ==
                    allowedFileTypes[i]) {
                    found = true;
                }
            }
            if(found == false) {
                $scope.fileBeingAddedForUpload = null;
                $scope.fileUploadError =
                    'Can\'t upload file in that format.';
                return;
            } else {
                $scope.fileBeingAddedForUpload.sizeInKb = Math.round(
                    ($scope.fileBeingAddedForUpload.size /
                        1024) * 10) / 10;
                if($scope.fileBeingAddedForUpload.sizeInKb >
                    maxFileSize * 1024) {
                    $scope.fileUploadError =
                        'File size can\'t exceed ' +
                        maxFileSize + ' MB';
                    return;
                }
                reader = new FileReader();
                reader.readAsDataURL($scope.fileBeingAddedForUpload);
                reader.onload = function(e) {
                    $scope.files.push({
                        'content': e.target.result,
                        'filename': $scope.fileBeingAddedForUpload
                            .name,
                        'sizeInKb': $scope.fileBeingAddedForUpload
                            .sizeInKb
                    });
                    $scope.fileBeingAddedForUpload = null;
                    $scope.$apply();
                };
            }
        });

        $scope.removeFile = function(idx) {
            $scope.files.splice(idx, 1);
        };

        $scope.clickedOnModalBody = function(evnt) {
            var ignoreList = [
                "custom-checkbox",
                "custom-checkbox-squire", "selected-pm",
                "dropdown-custom", "dropdown-btn",
                "ng-not-empty-add", "ng-pristine-remove",
                "ng-dirty-add",
                "ng-valid-parse-add", "ng-animate",
                "ng-empty-remove",
                "", "remove"
            ];
            var currentClassList = evnt.target.className.split(' ');
            var hideFlag = true;
            for(var i = 0; i < currentClassList.length; i++) {
                if(ignoreList.indexOf(currentClassList[i]) !== -1) {
                    hideFlag = false;
                    break;
                }
            }
            if(hideFlag && $scope.open) {
                $scope.open = false;
            }
        };

        $window.onclick = function(event) {
            var fist_parent = angular.element(event.target).parent()[
                0];
            var second_parent = angular.element(fist_parent).parent()[
                0];
            var elementClasses = null;
            if(angular.element(second_parent).parent()[0]) {
                elementClasses = angular.element(second_parent).parent()[
                    0].classList;
            }

            if(angular.element(event.target)[0].classList.contains(
                    'custom-checkbox-squire') || angular.element(
                    event.target)[
                    0].classList.contains('ng-untouched'))
                return;
            if(elementClasses && elementClasses.contains(
                    'dropdown-panel') || fist_parent.classList.contains(
                    'dropdown-panel') || angular.element(
                    event.target)[0].classList.contains(
                    'dropdown-custom')) {
                return;
            }
            if(elementClasses && elementClasses.contains(
                    'dropdown-panel2') || fist_parent.classList.contains(
                    'dropdown-panel2') || angular.element(
                    event.target)[0].classList.contains(
                    'dropdown-custom2')) {
                return;
            }
            // 	$scope.open = false;
            // $scope.openTwo = false;
            //  console.log(elementClasses.contains('dropdown-panel2'));
        };

        // function closeSearchWhenClickingElsewhere(event, callbackOnClose) {
        // 	var clickedElement = event.target;
        // 	if (!clickedElement) return;

        // 	var elementClasses = clickedElement.classList;
        // 	console.log(elementClasses);
        // 	var clickedOnSearchDrawer = elementClasses.contains('dropdown-custom') || elementClasses.contains('dropdown-panel') || (clickedElement.parentElement !== null && clickedElement.parentElement.classList.contains('dropdown-panel'));

        // 	if (!clickedOnSearchDrawer) {
        // 		callbackOnClose();
        // 		return;
        // 	}
        // }


        // $scope.open = false;
        // $scope.toggleSearch = function () {
        // 	console.log('toggle')
        // 	$scope.open = !$scope.open;
        // 	$scope.openTwo = false;

        // 	if ($scope.open) {
        // 		$scope.$window.onclick = function (event) {
        // 			closeSearchWhenClickingElsewhere(event, $scope.toggleSearch);
        // 		};
        // 	} else {
        // 		$scope.open = false;
        // 		$scope.$window.onclick = null;
        // 		$scope.$apply();
        // 	}
        // };

        // $scope.toggleSearchTwo = function () {
        // 	console.log('toggle')
        // 	$scope.openTwo = !$scope.openTwo;
        // 	$scope.open = false;

        // 	if ($scope.openTwo) {
        // 		$scope.$window.onclick = function (event) {
        // 			closeSearchWhenClickingElsewhereTwo(event, $scope.toggleSearchTwo);
        // 		};
        // 	} else {
        // 		$scope.openTwo = false;
        // 		$scope.$window.onclick = null;
        // 		$scope.$apply();
        // 	}
        // };

        // function closeSearchWhenClickingElsewhereTwo(event, callbackOnClose) {

        // 	var clickedElement = event.target;
        // 	if (!clickedElement) return;

        // 	var elementClasses = clickedElement.classList;
        // 	var clickedOnSearchDrawer = elementClasses.contains('dropdown-custom2') || elementClasses.contains('dropdown-panel2') || (clickedElement.parentElement !== null && clickedElement.parentElement.classList.contains('dropdown-panel2'));

        // 	if (!clickedOnSearchDrawer) {
        // 		$scope.open = false;
        // 		callbackOnClose();
        // 		return;
        // 	}
        // }

        $scope.technologies = [{
            id: 1,
            name: "Python",
            model: "Python"
        }, {
            id: 2,
            name: "Django",
            model: "Django"
        }, {
            id: 3,
            name: "Angularjs",
            model: "Angularjs"
        }, {
            id: 4,
            name: "Java",
            model: "Java"
        }, {
            id: 5,
            name: "C",
            model: "C"
        }, {
            id: 6,
            name: "C++",
            model: "C_plus_plus"
        }, {
            id: 7,
            name: ".Net",
            model: "Net"
        }, {
            id: 8,
            name: "PHP",
            model: "PHP"
        }, {
            id: 9,
            name: "Magento",
            model: "Magento"
        }, ]


        $scope.bannerImages = [{
            img: "img/binate-banner-01.jpg",
            title1: "Entering a new era of transformations, we refocus energies towards “Creating memorable digital experiences everyday” for our customers.",
            captionAlign: "right-align"
        }, {
            img: "img/binate-banner-02.jpg",
            title1: "Our client’s priorities drive our business focus. Binate's industry knowledge helps solve the toughest problems. For us, “good enough” is not enough.",
            captionAlign: "right-align"
        }, {
            img: "img/binate-banner-03.jpg",
            title1: "we can deliver 25% - 30% efficiency gains in the first 6 to 12 months of a client relationship versus waiting for savings in the off years.",
            captionAlign: "left-align"
        }];


        $scope.services = [{
            id: 1,
            icon: "li-target",
            name: "Agile process",
            description: "It is a long established fact that. It is a fact that a reader will be distracted by the readable content of a page when.  It is a long established fact that. It is a fact that a reader will be distracted by the readable content of a page when."
        }, {
            id: 2,
            icon: "li-paper-plane",
            name: "low Cost",
            description: "Amazing new frustration. New infer anger or amazing new frustration. The color red can infer amazing new frustration. Amazing new frustration. New infer anger or amazing new frustration. The color red can infer amazing new frustration."
        }, {
            id: 3,
            icon: "li-graph",
            name: "Your Controll",
            description: "With Binate Solutions you have your own people that are working exclusively for you. It's your work, your team hence your instruction."
        }, ]

        $scope.animation = {};
        $scope.animation.current = 'fadeInUp';
        $scope.animation.previous = $scope.animation.current;

        // only required for dynamic animations
        $scope.changeAnimation = function() {

            var elements = document.getElementsByClassName(
                'car-container');
            var $elements = angular.element(elements);

            $elements.removeClass('animated ' + $scope.animation.previous);
            $elements.addClass('not-visible');

            $scope.animation.previous = $scope.animation.current;
            $document[0].dispatchEvent(new CustomEvent('scroll'));
        };

        $scope.animateElementIn = function($el) {
            $el.removeClass('not-visible');
            $el.addClass('animated ' + $scope.animation.current);
        };

        $scope.animateElementOut = function($el) {
            $el.addClass('not-visible');
            $el.removeClass('animated ' + $scope.animation.current);
        };

        $scope.animateElementfadeInRight = function($el) {
            $el.removeClass('not-visible');
            $el.addClass('animated fadeInRight');
        };

        $scope.animateElementfadeOutRight = function($el) {
            $el.addClass('not-visible');
            $el.removeClass('animated fadeInRight');
        };



        //Application Form
        $scope.teamqueryModal = function() {
            ngDialog.open({
                template: 'queryModal',
                controller: 'homeController',
                className: 'ngdialog-theme-default'
            });
        };

        //Sales queries form
        $scope.salesQueryModal = function() {
            ngDialog.open({
                template: 'saleQueryModal',
                controller: 'homeController',
                className: 'ngdialog-theme-default'
            });
        };

    }
]);
