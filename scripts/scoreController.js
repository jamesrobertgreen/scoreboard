app.controller('scoreController', ['$scope', function ($scope) {
    $scope.players = [];
    $scope.score = function (player, score) {
        player.Score += score;
    };
    $scope.addName = function (newName) {
        var newPlayer = {
            "Name": newName
            , "Score": 0
        };
        $scope.players = $scope.players.concat(newPlayer);
    };
    
    $scope.reset = function (player) {
        player.Score = 0;
    };
    
    $scope.remove = function ($index) {
        $scope.players.splice($index, 1);
    };
}]);