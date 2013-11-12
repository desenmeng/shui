var request = require('request');

module.exports = function(domain,callback){
	request('https://domai.nr/api/json/info?q='+domain, function (error, response,body) {
 		if (!error && response.statusCode == 200) {
    	 	callback(JSON.parse(body));
 		}
 		else{
 			callback(error);
 		}
	});
};