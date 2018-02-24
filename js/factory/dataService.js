eFormsBuilder.factory("Data",
	function($http, $q, $rootScope){
		var factoryVariables = {

		};

		var getTextContents = function(){
			if (typeof(factoryVariables.text) != 'undefined'){
				var arr = [];

				var lines = factoryVariables.text.split("\n");

				$.each(lines, function(n, line) {
					if (line.charAt(0) == '['){
						line = line.replace(/[^a-zA-Z ]/g, "");
						arr.push({
							name: line
						});
					}
				});
							return arr;

			} else {
				return;
			}

		};

		var setTextContents = function(text){
			factoryVariables.text = text;
		};

		return {
			getTextContents: getTextContents,
			setTextContents: setTextContents
		}
	}
);