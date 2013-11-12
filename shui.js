var request = require('request');

module.exports = function(domain,callback){
	if(domain.cli){
		domain = domain._[0];
	}
	request('https://domai.nr/api/json/info?q='+domain, function (error, response,body) {
 		if (!error && response.statusCode == 200) {
 			if(typeof callback ==='function'){
 				callback(JSON.parse(body));
 			}
 			else{
 				console.log(JSON.parse(body));
 			}
 		}
 		else{
 			if(typeof callback ==='function'){
 				callback(error);
 			}
 			else{
 				console.log(error);
 			}
 		}
	});
};