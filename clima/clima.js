const axios = require('axios');
const apiKey = ''; //OpenWeather API KEY



const getClima = async(lat, lng)=>{

	let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ apiKey }`);

	return resp.data.main.temp;
	
}

module.exports = {
	getClima	
}