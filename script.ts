var rickMortyApp = angular.module('RickMorty', []);

var next = '?page=';
var vide = '';
var depart = 0;
var add = 1;
var actu = 0;

rickMortyApp.controller('RickMortyChar',
    function rickMortyController($scope, $http) {

        $scope.click = function click() {

        console.log('here');
        var true1 = document.getElementById("suiv").checked;
        var true2 = document.getElementById("prec").checked;

        var add = 1;
        var actu = 0;
        
        console.log('avant le if ',actu, add)

        if( true1 = true && actu >= 0){
            actu.count += add;
            next = next + actu;
            console.log('actu valeur :', actu, 'next valeur :', next );
        } else if (true2 = true && actu >= 0) {
            actu -= add;
            next = next + actu;
            console.log('actu valeur :', actu, 'next valeur :', next );
        } else {
            actu = 0;
            next = next + vide;
            console.log('next valeur :', next );
        }
        
        
        }
        
        $scope.init = function init() {
            $http.get('https://rickandmortyapi.com/api/character/')
                .then(function(response) {
                        $scope.rick = response.data.info;
                        $scope.morty = response.data.results;

                });
        };

    $scope.init();

});

rickMortyApp.controller('RickMortyChar3',
    function rickMortyController($scope, $http) {


        $scope.init = function init() {
            $http.get('https://rickandmortyapi.com/api/character/18,32,64')
                .then(function(response) {
                        $scope.rick = response.data;

                });
        };

        
    $scope.init();

});


rickMortyApp.controller('RickMortyEp',
function Characters($scope, $http) {

        $scope.init = function init() {
            $http.get('https://rickandmortyapi.com/api/episode/10,28,1,6,15,11')
                .then(function(response) {
                    $scope.rick = response.data;
                });
        };

        
    $scope.init();

});


rickMortyApp.controller('RickMortyEp',
function EpChar($scope, $http) {

        $scope.init = function init() {
            $http.get('https://rickandmortyapi.com/api/episode/10,28,1,6,15,11,2,3,4,5')
                .then(function(response) {
                    $scope.rick = response.data;
                });
        };

        
    $scope.init();

});

