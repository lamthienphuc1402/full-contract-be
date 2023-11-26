import { Sequelize } from "sequelize";
// const { Sequelize } = require("sequelize");
const dbName = "QUANLYBDS_TEAM3";
const dbUser = process.env.DATABASE_USERNAME;
const dbPassword = process.env.DATABASE_PASSWORD;
const host = "localhost"
console.log(dbPassword)
export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mssql",
  host,
  port: 49689,

  dialectOptions: {
    
    // Observe the need for this nested `options` property for MSSQL
    options: {
      // Your tedious options here
      encrypt: false,
      trustServerCertificate: true,
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
