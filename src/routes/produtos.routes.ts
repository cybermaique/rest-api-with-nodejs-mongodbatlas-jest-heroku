import { Router } from "express";

const produtosRoutes = Router();

const produtos = [];

produtosRoutes.post("/produtos", (request, response) => {
  const { nome, descricao } = request.body;

  produtos.push({
    nome,
    descricao,
  });

  return response.status(201).send();
});

export { produtosRoutes };
