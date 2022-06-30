import { Router } from "express";
import { Produtoo } from "../model/Produtoo";
import { ProdutosRepository } from "../repositories/ProdutosRepository";

const produtosRoutes = Router();
const produtosRepository = new ProdutosRepository();

const produtos: Produtoo[] = [];

produtosRoutes.post("/produtos", (request, response) => {
  const { nome, descricao, preco } = request.body;

  produtosRepository.salvar({ nome, descricao, preco });

  return response.status(201).send();
});

export { produtosRoutes };
