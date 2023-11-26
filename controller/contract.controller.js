import { Contract } from "../models/contract.model.js";

// const Request = require("tedious").Request;
export const ContractController = {
  getContracts: async (req, res) => {
    try {
      const data = await Contract.findAll();
      console.log(data);
      if (data) {
        console.log("Query episode successfully");
        res.json({ status: "success", contracts: data });
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  createContract: async (req, res) => {
    try {
      const formData = req.body;
      console.log(typeof formData.remain);
      const date = new Date().toISOString().split("T")[0];
      console.log(date);
      const data = await Contract.create({
        ...formData,
        price: parseInt(formData.price),
        deposit: parseInt(formData.deposit),
        remain: parseInt(formData.remain),
        year_of_birth: parseInt(formData.year_of_birth),
        date_of_contract: date,
        status: 1,
      });

      if (data) {
        res.json({ status: true });
        return;
      }
      res.json({ status: false });
      return;
    } catch (error) {
      throw new Error(error);
    }
  },
};
