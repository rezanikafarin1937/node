const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "sefaresh",
  })
  .promise();

const getCities = async () => {
  const result = await pool.query("select * from cities");
  console.log("result = ", result);
};
getCities()
