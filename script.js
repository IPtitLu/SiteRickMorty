var rickMortyApp = angular.module('RickMorty', []);

var int = 1;
var next = '?page=';

rickMortyApp.controller('RickMortyChar',
    function rickMortyController($scope, $http) {

        
        $scope.suiv = function suiv($test) {
            next = '?page=';
            int = int + $test; 
            next = next + int;
            console.log(next);
        }

        $scope.prec = function prec($test) {
            if(int >2) {
                next = '?page=';
                int = int - $test;
                next = next + int;
            } else if (int <= 3) {
                next = '';
            } else {
                alert("error");
            }
            console.log(next);
            
        }
        


        
        $scope.init = function init() {
            $http.get('https://rickandmortyapi.com/api/character/' + next)
                .then(function(response) {
                        $scope.rick = response.data.info;
                        $scope.morty = response.data.results;
                        
                });
        };

    $scope.init();
    }

);

rickMortyApp.controller('RickMortyChar3',
    function rickMortyController($scope, $http) {


        $scope.init = function init() {
            $http.get('https://rickandmortyapi.com/api/character/22,51,97')
                .then(function(response) {
                        $scope.rick = response.data;

                });
        };

        
    $scope.init();

});

rickMortyApp.controller('RickMortyChar2',
    function rickMortyController($scope, $http) {


        $scope.init = function init() {
            $http.get('https://rickandmortyapi.com/api/character/1,2')
                .then(function(response) {
                        $scope.rick = response.data;

                });
        };

        
    $scope.init();

});



rickMortyApp.controller('RickMortyEp',
function EpChar($scope, $http) {

        $scope.init = function init() {
            $http.get('https://rickandmortyapi.com/api/episode/')
                .then(function(response) {
                    $scope.rick = response.data.results;
                    console.log(response.data);
                });
        };

        
    $scope.init();

});

