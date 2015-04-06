(function() {
    var app = angular.module('myApp', []);
    
    app.controller('appController', function($scope){
		this.jets = jets;
		this.tab = tab;
        $scope.toggle = function(el,status,number,enabled){ //toggles jets on and off, then updates config accordingly
            console.log('toggle ran');
			if(enabled === 1){
            	if(status === 1){
                	jets[number].spraying = 0;
					document.getElementById(el).className = 'idle';
                	config = config - Math.pow(2,number);
                	console.log('as true');
                	console.log(config);
            	} else {
                	jets[number].spraying = 1;
					document.getElementById(el).className = 'active';
                	config = config + Math.pow(2,number);
                	console.log('as false');
                	console.log(config);
            	}
			} else {
				console.log('but valve is disabled');
			}
        };
		$scope.applycode = function(){ //takes code from codeIn field, converts it to decimal and binary, then turns jets on and off based of the value of config
			code = document.getElementById("codeIn").value;
			console.log('code is ' + code);
			if (isNaN(parseInt(code, 16)) || code.length != 6){
			    window.alert("That is not a valid code!");
			} else{
			    config = parseInt(code, 16); //discards any characters after a character that is not [A-F|a-f|0-9], only NaN if first character is invalid
			    console.log(config);
			    bitmap = config.toString(2);
			    console.log(bitmap);
			    var localconfig = config;
			    for (var i = 23; i>=0; i--){
			        if(localconfig - Math.pow(2,i)>=0) {
			            localconfig = localconfig - Math.pow(2,i);
			            jets[i].spraying = 1;
			            console.log("jet"+ i +" on");
			        } else {
			            jets[i].spraying = 0;
			            console.log("jet"+i+" off")
			        }
			    }
			}
		};
		$scope.makecode = function(){ //output value from config as a hexadecimal code for user
		    code = config.toString(16);
		    document.getElementById("codeOut").value = code;  
		};
    });
    
	var tab = 1; //controls the tab being shown
	var bitmap = 0; //mostly just useful for debugging purposes as of now
	var code = 0;   //hexadecimal code for user to save and submit later due to the lack of a true profile funcion
	var config = 0; //this is, as far as I know, how the app will communicate with the api
    var jets = [
        { "ID": 1, "name": "V1", "spraying": 0, "enabled": 1 },
        { "ID": 2, "name": "V2", "spraying": 0, "enabled": 1 },
        { "ID": 3, "name": "V3", "spraying": 0, "enabled": 1 },
        { "ID": 4, "name": "V4", "spraying": 0, "enabled": 1 },
        { "ID": 5, "name": "V5", "spraying": 0, "enabled": 1 },
        { "ID": 6, "name": "V6", "spraying": 0, "enabled": 1 },
        { "ID": 7, "name": "V7", "spraying": 0, "enabled": 1 },
        { "ID": 8, "name": "V8", "spraying": 0, "enabled": 1 },
        { "ID": 9, "name": "V9", "spraying": 0, "enabled": 1 },
        { "ID": 10, "name": "V10", "spraying": 0, "enabled": 1 },
        { "ID": 11, "name": "VC", "spraying": 0, "enabled": 1 },
        { "ID": 12, "name": "VR", "spraying": 0, "enabled": 1 },
        { "ID": 13, "name": "H1", "spraying": 0, "enabled": 1 },
        { "ID": 14, "name": "H2", "spraying": 0, "enabled": 1 },
        { "ID": 15, "name": "H3", "spraying": 0, "enabled": 1 },
        { "ID": 16, "name": "H4", "spraying": 0, "enabled": 1 },
        { "ID": 17, "name": "H5", "spraying": 0, "enabled": 1 },
        { "ID": 18, "name": "H6", "spraying": 0, "enabled": 1 },
        { "ID": 19, "name": "H7", "spraying": 0, "enabled": 1 },
        { "ID": 20, "name": "H8", "spraying": 0, "enabled": 1 },
        { "ID": 21, "name": "H9", "spraying": 0, "enabled": 1 },
        { "ID": 22, "name": "H10", "spraying": 0, "enabled": 1 },
        { "ID": 23, "name": "HC", "spraying": 0, "enabled": 1 },
        { "ID": 24, "name": "HR", "spraying": 0, "enabled": 1 }
    ];
})();