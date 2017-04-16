'use strict';


app.controller('careerController', ['$rootScope', '$document', '$scope', 'ngDialog', function($rootScope, $document,
    $scope, ngDialog) {

    $scope.jobCirculars = [{
        id: 1,
        name: "Sr. software Engineer (WordPress)",
        description: "We are seeking a WordPress Developer responsible for both back-end and front-end development, including creating WordPress themes and plugins. This position requires a combination of programming skills (namely PHP, HTML5, CSS3, and JavaScript) and aesthetics (understanding element arrangements on the screen, the color and font choices.",
        link: "wordpress.html",
        experience: "At least 4 years",
        deadline: "Open"
    }, {
        id: 2,
        name: "Software Engineer (Ruby)",
        description: "We are looking for Ruby developers, responsible for building Ruby applications, including anything from complex groups of back-end microservices to command line utilities and data processing scripts. Primary responsibility will be to design and develop these applications, and to coordinate with the rest of the team working on different layers of the infrastructure.",
        link: "ruby-on-rails.html",
        experience: "3 to 4 years",
        deadline: "Closed"
    }, {
        id: 3,
        name: "Software Engineer (Magento)",
        description: "We are currently seeking 5 full-time, on-site Magento developer to join our team for Minneapolis, MN. Duties would primarily consist of developing new projects built using the Magento platform, writing custom extensions, identifying quality community extensions, and architecting new Magento bids. Applicants will be expected to provide examples of work, if available, and may be asked to complete a coding challenge.",
        link: "magento",
        experience: "3 to 5 years",
        deadline: "Closed"
    }, {
        id: 4,
        name: "Software Engineer (QA)",
        description: "We're looking for a Software Engineer (QA) to join our core team. Write extensive unit test covering corner cases. Need depth Knowledge in Python/Ruby/Javascript/Java",
        link: "qa",
        experience: "At least 2 year(s)",
        deadline: "Closed"
    }, {
        id: 5,
        name: "Software Engineer (Java)",
        description: "Interpreting the high level specification, defining the API's using XML schema (or JSON) and creating documentation. Implementing the API using Java, Spring, JAXRS, JAXB, JPA, etc",
        link: "java",
        experience: "At least 4 years ",
        deadline: "Closed"
    }, {
        id: 6,
        name: "Software Engineer (Python/Django)",
        description: "We're looking for a Python/Django developer to join our core team. Responsibilities include developing core components for our SaaS based e-commerce platform with Python web frameworks.",
        link: "python",
        experience: "At least 3 years ",
        deadline: "Closed"
    }];

    $scope.positions = ['Sr. software Engineer (WordPress)'];
    //, 'Software Engineer (Ruby)', 'Software Engineer (Magento)', 'Software Engineer (QA)','Software Engineer (Java)','Software Engineer (Python/Django)'


    //Application Form
    $scope.appliactionFormModal = function() {
        ngDialog.open({
            template: 'applicationForm',
            controller: 'careerController',
            className: 'ngdialog-theme-default'
        });
    };

}]);
