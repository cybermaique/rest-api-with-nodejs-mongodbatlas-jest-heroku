import { Produtoo } from "../model/Produtoo";

interface ISalvarProdutoDTO {
  nome: string;
  descricao: string;
  preco: number;
}

class ProdutosRepository {
  private produtos: Produtoo[];

  constructor() {
    this.produtos = [];
  }

  salvar({ descricao, nome, preco }: ISalvarProdutoDTO): void {
    const produto: Produtoo = {
      id: "10",
      create_at: new Date(),
      descricao: descricao,
      nome: nome,
      preco: preco,
    };

    this.produtos.push(produto);
  }
}

export { ProdutosRepository };