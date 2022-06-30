import { Router } from "express";
import { Produtoo } from "../model/Produtoo";
import { ProdutosRepository } from "../repositories/ProdutosRepository";

const produtosRoutes = Router();
const produtosRepository = new ProdutosRepository();

const produtos: Produtoo[] = [];

produtosRoutes.post("/produtos", (request, response) => {
  const { nome, descricao, preco } = request.body;

  const produtoExiste = produtosRepository.obterPorNome(nome);

    if (produtoExiste) {
        response.status(400).json({
            error: "O produto já existe!"
        });
    } 

  produtosRepository.salvar({ nome, descricao, preco });

  return response.status(201).send();
});

produtosRoutes.get("/produtos", (request, response) => {
  const listaProdutos = produtosRepository.obterTodos();

  return response.json(listaProdutos);
});

export { produtosRoutes };
