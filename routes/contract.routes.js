import { ContractController } from "../controller/contract.controller.js";
import { Router } from "express";
const router = Router();
export const ContractRoutes = (app) => {
  router.get("/api/contracts", ContractController.getContracts);
  router.post("/api/create_contract", ContractController.createContract);

  app.use(router);
};
