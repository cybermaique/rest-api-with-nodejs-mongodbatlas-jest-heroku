import { Router } from "express";
import { ProdutosRepository } from "../repositories/ProdutosRepository";
import { ProdutosService } from "../services/ProdutosService";

const produtosRoutes = Router();
const produtosRepository = new ProdutosRepository();

produtosRoutes.post("/produtos", (request, response) => {
  const { nome, descricao, preco } = request.body;

  const produtosService = new ProdutosService(produtosRepository);

  produtosService.salvarProduto({ nome, descricao, preco });

  return response.status(201).send();
});

produtosRoutes.get("/produtos", (request, response) => {
  const produtosService = new ProdutosService(produtosRepository);
  const listaProdutos = produtosService.obterTodos();

  return response.json(listaProdutos);
});

export { produtosRoutes };
