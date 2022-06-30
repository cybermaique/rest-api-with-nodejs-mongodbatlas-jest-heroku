import express from "express";
import { produtosRoutes } from "./routes/produtos.routes";

const app = express();

app.use(express.json());

app.use(produtosRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
