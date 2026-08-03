// const CitiesModel = require("../models/cities_model");
import CitiesModel from "../models/cities_model.js";

// get all cities
// const cities = await CitiesModel.getCities();
// console.log(cities) 

// should use Es Module for get Array
// if use from commonJs then get a Promise
// you should insert .js end of module name


// if you use commonJs then should write this code
// cities.then(res=>{
//     data = [...res];
//     console.log('data = ',data)

// }).catch(err => {
//     console.log(err)
// })

// or write this code
// async function showData() {
//   let myData = await CitiesModel.getCities();
//   console.log("myData  = ", myData);
// }
// showData()

// get one city
// const city = await CitiesModel.getCity(1000);
// console.log(city)


// insert city
// (id, provinceId, city)
// const result = await CitiesModel.insertCity(1007,600,'عیسی آباد');
// console.log(result);



// update city
// const newCity = await CitiesModel.updateCity(1001,'شهرعلی')
// console.log('update is = ',newCity)


const result = await CitiesModel.deleteCity(1007);
console.log(result)
