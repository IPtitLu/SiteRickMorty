var rickMortyApp = angular.module('RickMorty', []);



rickMortyApp.controller('RickMortyChar',
    function rickMortyController($scope, $http) {

        $scope.click = function click($test) {

        console.log('here');

        var actu = parseInt(0);
        var add = parseInt(1);
        var actu1 = parseInt(0);
        var button = $test;
        var next = '?page=';
        console.log('avant le if ',actu, add)
        console.log(button);

        if( button == 2  && (actu >= 0)){
            next = next;
            parseInt(actu1) = parseInt(actu) + parseInt(add);
            next = next + actu1;
            console.log('actu valeur Suiv:', actu1, 'next valeur :', next );
        } 
        if (button == 1 && (actu >= 0)) {
            next = '?page=';
            actu1 = 0;
            next = next + actu1;
            console.log('actu valeur Prec:', actu1, 'next valeur :', next );
        } 
        if (button == 1 && (actu < 0)){
            actu1 = 0;
            next = '?page=';
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

