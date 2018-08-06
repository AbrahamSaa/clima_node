const argv = require('yargs').options({
	direccion:{
		alias:"d",
		desc:"Dirección de la ciudad para el clima",
		demand: true
	}
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getInfo = async(dir)=>{

	try{
		let coors = await lugar.getLugarLatLng( dir );
		let temp = await clima.getClima( coors.lat, coors.lng );

		return `El clima en ${coors.address} es de ${temp}°C`;

	}catch(e){
		return `No se pudo determinar el clima en ${address}`		
	}

}

getInfo(argv.direccion)
	.then((resp)=>{
		console.log(resp);
	})
	.catch(e=>console.log(e));