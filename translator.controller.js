'use strict';

angular.module('test1App')
  .controller('TranslatorCtrl', function ($scope, $http) {

    $scope.translateOp = function () {
        $scope.opOutput = $scope.op.replace(/[o]/ig,'opo').replace(/[a]/ig,'opa').replace(/[e]/ig,'ope').replace(/[i]/ig,'opi').replace(/[u]/ig,'opu').replace(/[y]/ig,'opy');
    }
    $scope.translateLanguage = function(language){
    	// var vowelsArray = ['a','e','i','o','u','y'];
    	// var vowel = _.each(vowelsArray, function(val,key){
    	// 	console.log(val,key)
    	// 	if (language.indexOf(val) === -1){
    	// 		return val;
    	// 	}
    	// });
  		if (language.indexOf('a') > 0){
	        $scope.opOutput = $scope.op.replace(/[a]/ig,language+'a').replace(/[o]/ig,language+'o').replace(/[e]/ig,language+'e').replace(/[i]/ig,language+'i').replace(/[u]/ig,language+'u').replace(/[y]/ig,language+'y');
  		} else if (language.indexOf('o') > 0){
	        $scope.opOutput = $scope.op.replace(/[o]/ig,language+'o').replace(/[a]/ig,language+'a').replace(/[e]/ig,language+'e').replace(/[i]/ig,language+'i').replace(/[u]/ig,language+'u').replace(/[y]/ig,language+'y');
  		} else if (language.indexOf('o\i') > 0){
	        $scope.opOutput = $scope.op.replace(/[i]/ig,language+'i').replace(/[o]/ig,language+'o').replace(/[a]/ig,language+'a').replace(/[e]/ig,language+'e').replace(/[u]/ig,language+'u').replace(/[y]/ig,language+'y');
  		} else {
        $scope.opOutput = $scope.op.replace(/[o]/ig,language+'o').replace(/[a]/ig,language+'a').replace(/[e]/ig,language+'e').replace(/[i]/ig,language+'i').replace(/[u]/ig,language+'u').replace(/[y]/ig,language+'y');			
  		}
    }
    $scope.setLang = function(language){
    	$scope.language = language;
    	$scope.translateLanguage(language);
    }
    $scope.language = 'op';
  });
