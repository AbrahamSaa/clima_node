const axios = require("axios");
const apiKey = ''; //GOOGLE API

const getLugarLatLng = async(dir) =>{
	
	let encodedURL = encodeURI( dir );

	let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=${apiKey}`)
	
	if ( resp.data.status == "ZERO_RESULTS" ) {
		throw new Error(`No se encontro resultados ${dir}`);
	}else if ( resp.data.status == "OK" ){
		let address =resp.data.results[0]["formatted_address"];
		let lat = resp.data.results[0]["geometry"]["location"]["lat"];
		let lng = resp.data.results[0]["geometry"]["location"]["lng"];
	

		return {
			address:address,
			lat:lat,
			lng:lng
		}
	}
}

module.exports = {
	getLugarLatLng
}