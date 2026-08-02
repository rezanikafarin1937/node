// const CitiesModel = require("../models/cities_model");
import CitiesModel from "../models/cities_model.js";
const cities = await CitiesModel.getCities();
// should use Es Module for get Array
// if use from commonJs then get a Promise
// you should insert .js end of module name

console.log(cities) 


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
