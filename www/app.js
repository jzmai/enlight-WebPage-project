(function() {
    var app = angular.module('myApp', []);
    
    app.controller('appController', function($scope){
        this.jets = jets;
        $scope.toggle = function(status,number){
            console.log('toggle ran');
            if(status === 1){
                jets[number].spraying = 0;
                console.log('as true');
            } else {
                jets[number].spraying = 1;
                console.log('as false');
            }
        };
		$scope.applycode = function(){
			code = document.getElementById("code").value;
			console.log('code is');
			console.log(code);
			config = parseInt(code, 16); //does some weird wrapping when characters besides A-F are used for any digit after the first, but returns legitimate numbers
			console.log(config);
			bitmap = config.toString(2);
			console.log(bitmap);
		};
    });
    
	var bitmap = 0;
	var code = 0;
	var config = 0;
    
    
	
    var jets = [
        { "ID": 1, "name": "V1", "spraying": 1, "enabled": 1 },
        { "ID": 2, "name": "V2", "spraying": 1, "enabled": 1 },
        { "ID": 3, "name": "V3", "spraying": 1, "enabled": 1 },
        { "ID": 4, "name": "V4", "spraying": 1, "enabled": 1 },
        { "ID": 5, "name": "V5", "spraying": 1, "enabled": 1 },
        { "ID": 6, "name": "V6", "spraying": 1, "enabled": 1 },
        { "ID": 7, "name": "V7", "spraying": 1, "enabled": 1 },
        { "ID": 8, "name": "V8", "spraying": 1, "enabled": 1 },
        { "ID": 9, "name": "V9", "spraying": 1, "enabled": 1 },
        { "ID": 10, "name": "V10", "spraying": 1, "enabled": 1 },
        { "ID": 11, "name": "VC", "spraying": 1, "enabled": 1 },
        { "ID": 12, "name": "VR", "spraying": 1, "enabled": 1 },
        { "ID": 13, "name": "H1", "spraying": 1, "enabled": 1 },
        { "ID": 14, "name": "H2", "spraying": 1, "enabled": 1 },
        { "ID": 15, "name": "H3", "spraying": 1, "enabled": 1 },
        { "ID": 16, "name": "H4", "spraying": 1, "enabled": 1 },
        { "ID": 17, "name": "H5", "spraying": 1, "enabled": 1 },
        { "ID": 18, "name": "H6", "spraying": 1, "enabled": 1 },
        { "ID": 19, "name": "H7", "spraying": 1, "enabled": 1 },
        { "ID": 20, "name": "H8", "spraying": 1, "enabled": 1 },
        { "ID": 21, "name": "H9", "spraying": 1, "enabled": 1 },
        { "ID": 22, "name": "H10", "spraying": 1, "enabled": 1 },
        { "ID": 23, "name": "HC", "spraying": 1, "enabled": 1 },
        { "ID": 24, "name": "HR", "spraying": 1, "enabled": 1 }
    ];
})();

