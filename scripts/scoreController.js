app.controller('scoreController', ['$scope', function($scope) {

    $scope.players = [
                        {"Name":"James","Score":0},                        {"Name":"David","Score":0},
                        {"Name":"Frank","Score":0},     
                     ];
    
    $scope.score = function(player,score){
        player.Score+=score;        
    };
    
}]);