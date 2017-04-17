var app = angular.module('app', []);
app.controller('MyCtrl', function ($scope) {
    var i = 0;
    $scope.cols = [

    ];
    $scope.data = [

    ]
    $scope.addColumn = function () {
        i = i + 1;
        var column = {
            id: "",
            name: i
        };
        var row = {
            id: "",
            text: ""
        }
        $scope.cols.push(column);
        $scope.data.push(row);
        console.log($scope.data)

    };
    $scope.delete = function (index) {
        $scope.data.splice(index, 1);
        $scope.cols.splice(index, 1)
    };

});