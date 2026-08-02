const pool = require("../utilities/mysql_database");

class CitiesModel {
  static getCities = async () => {
    const [result] = await pool.query("select * from cities");
    return result;
  };

}


module.exports = CitiesModel;
