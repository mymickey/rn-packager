module.exports = {
	processJSON:function(json){
		//return json;
		var symbol = 'node_modules/react-native';
	    for (var i = 0; i < json.modules.length; i++) {
	      console.log(json.modules[i].sourcePath)
	      if (json.modules[i].sourcePath.indexOf(symbol) !=-1 || json.modules[i].sourcePath.indexOf('InitializeJavaScriptAppEngine') !=-1) {
	        json.modules.splice(i,1);
	        --i;
	      };
	    };
	    console.log('sourceMapUrl',json.modules);
	    return json
	}
}