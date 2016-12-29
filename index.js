'use strict';

//var uuid = require('node-uuid');

module.exports = httpRequestFollower;

const HRF_HEADER = 'x-hrf-id';

function httpRequestFollower (options){
	return function httpRequestFollower (req, res, next){
		if(!req.header(HRF_HEADER))
			//req.headers[HRF_HEADER] = uuid.v4();
			req.headers[HRF_HEADER] = Math.floor((Math.random() * 1000000000) + 1);

		return next();
	};
}

module.exports.getHrfHeader = function(req){
	//if the hrf value exists, return a well constructed header

	if (req.header(HRF_HEADER)){
		var header = {};
		header[HRF_HEADER] = req.header(HRF_HEADER);
		return header;
	}
	return null;
};
