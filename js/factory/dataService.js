eFormsBuilder.factory("Data",
	function($http, $q, $rootScope){
		var factoryVariables = {

		};

		var getTextContents = function(){
			if (typeof(factoryVariables.text) != 'undefined'){
				var arr = [];
				var shortcut = {};
				var texts = [];
				var conditional = [];

				var lines = factoryVariables.text.split("\n");

				$.each(lines, function(n, line) {
					// trim spaces
					line = line.replace(/\s+/g,' ');
					line = line.trim();

					if (line.charAt(0) == '['){
						if (texts.length>0){
							arr.push(
								{
									name:         shortcutName,
									text:         texts,
									conditional:  conditional,
									color:        'color(0, 0, 0)',
									symbolSet:    'symbolset("Windows 3.1 Latin 1")',
									lpi:          'lpi(6.000)',
									sep:          'sep(0.000)',
									style:        'style("regular")',
									typeface:     'typeface("univers")',
									layer:        'layer(5)'
								}
							);
							texts = [];
							conditional = [];
						}
						// replace both square braces
						line = line.replace(/[\[\]']+/g,'');
						shortcutName = line;
					} else {
						// line = line.trim();
						if (line.substring(0,4) == 'text' || line.substring(0,4) == "sign"){
							if (conditional.length == 0){
								conditional = '';
							}
							texts.push(
								{
									name:line,
									conditional
								}
							);
							conditional = '';
						}
						if (line.substring(0,2) == 'if'){
							conditional = line;
						}						
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