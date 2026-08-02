const pool = require('../utilities/mysql_database.js')


/* read all data */  
// const getCities = async () => {
//   const result = await pool.query("select * from cities");
//   return result;
// };
// var data = []
// getCities()
//   .then((res) => {

//     [...data] = res;
//     console.log("data first log = ", data);
//   })
//   .then(() => {
//     console.log("data second log = ", data);
//   }).catch(err => {
//     console.log(err)
//   });





//read one data
  let city = null;
  const getCity = async (id)=>{
    const d = await pool.query(`select * from cities where id = ?`,[id])
    city = [...d]
    console.log('city = ',city[0][0])
    // این روش هم درست است
    // city = d[0][0]
    // console.log('city = ',city)

  }
//   getCity(69)



// insert data in cities table
// const insertCity = async (id,provinceId,city) => {
//     const result = await pool.query(`insert into cities (id,province_id,name) values (?,?,?)` , [id,provinceId,city])
//     return result;
// }

// const data = insertCity(1001,33,'مهرشهر').then(result => {
//     console.log('new city = ',result)
// }).catch(err=>{
//     console.log(err)
// })

// getCity(1000)


// update 
// const updateCity = async (id,city) =>{
//    const [result] =  await pool.query('update cities set name = ?  where id = ?',[city,id])
//    return getCity(id)
// }
// const newCity =  updateCity(1001,'شهرعلی')
// console.log('update is = ',newCity)



// delete
const deleteCity = async (id) =>{
    const result = pool.query('delete from cities where id = ?',[id]);
    if(result){
        return true
    }
    else{
        false
    }
}
const isDelete = deleteCity(1001);
if(isDelete){
    console.log('record is deleted')
}
else
{
    console.log('not found')
}

