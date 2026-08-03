const pool = require("../utilities/mysql_database");

class CitiesModel {
  static getCities = async () => {
    const [result] = await pool.query("select * from cities");
    return result;
  };

  static getCity = async (id) => {
    const [data] = await pool.query(`select * from cities where id = ?`, [id]);
    return [...data][0];
  };

  static insertCity = async (id, provinceId, city) => {
    const [result] = await pool.query(
      `insert into cities (id,province_id,name) values (?,?,?)`,
      [id, provinceId, city],
    );
    return result;
  };

  static updateCity = async (id, city) => {
    const [result] = await pool.query(
      "update cities set name = ?  where id = ?",
      [city, id],
    );
    return result;
  };

  static deleteCity = async (id) => {
    const city =  this.getCity(id)
    if(city){
        pool.query("delete from cities where id = ?", [id]);
        return city;
    }
    return null;
  };
}

module.exports = CitiesModel;
