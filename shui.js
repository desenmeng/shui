var request = require('https').get;

module.exports = function(domain,callback){
	if(domain.cli){
		domain = domain._[0];
	}
	request('https://domai.nr/api/json/info?q='+domain, function (res) {
		var body = '';

    	res.on('data', function(chunk) {
        	body += chunk;
    	});

   		res.on('end', function() {
        	var data = JSON.parse(body)
          if(typeof callback==='function'){
            callback(data);
          }
          else{
            console.log(data);
          }
    	});
	}).on('error', function(e) {
  		    if(typeof callback==='function'){
            callback(e.message);
          }
          else{
            console.log(e.message);
          }
	});
};