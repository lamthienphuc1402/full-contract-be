import express from "express";
import "dotenv/config";
import cors from "cors";
import { ContractRoutes } from "./routes/contract.routes.js";

const app = express();
const port = 4000;



app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*Routes */
ContractRoutes(app);