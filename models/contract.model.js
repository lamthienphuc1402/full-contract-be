import { sequelize } from "../db.js";
import DataTypes from "sequelize";

export const Contract = sequelize.define(
  "Full_Contract",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    full_contract_code: {
      type: DataTypes.STRING,
    },
    customer_name: {
      type: DataTypes.STRING,
    },
    year_of_birth: {
      type: DataTypes.INTEGER,
    },
    ssn: {
      type: DataTypes.STRING,
    },
    customer_address: {
      type: DataTypes.STRING,
    },
    mobile: {
      type: DataTypes.STRING,
    },
    property_id: {
      type: DataTypes.INTEGER,
    },
    date_of_contract: {
      type: DataTypes.DATE,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    deposit: {
      type: DataTypes.INTEGER,
    },
    remain: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,

    // If don't want createdAt
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false,
    freezeTableName: true,
    hasTrigger: true,
  }
);
