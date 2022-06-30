import { Router } from "express";
import { Produtoo } from "../model/Produtoo";

const produtosRoutes = Router();

const produtos: Produtoo[] = [];

produtosRoutes.post("/produtos", (request, response) => {
  const { nome, descricao, preco } = request.body;

  const produto: Produtoo = {
    id: "10",
    create_at: new Date(),
    descricao: descricao,
    nome: nome,
    preco: preco
    
  }
  
  produtos.push(produto);

  return response.status(201).send();
});

export { produtosRoutes };
