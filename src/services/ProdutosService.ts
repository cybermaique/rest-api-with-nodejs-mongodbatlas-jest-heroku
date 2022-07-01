import { Produtoo } from "../model/Produtoo";
import { ProdutosRepository } from "../repositories/ProdutosRepository";

interface IRequest {
  nome: string;
  descricao: string;
  preco: number;
}

class ProdutosService {
  constructor(private produtosRepository: ProdutosRepository) {}

  salvarProduto({ nome, descricao, preco }: IRequest): void {
    const produtoExiste = this.produtosRepository.obterPorNome(nome);

    if (produtoExiste) {
      throw new Error("O produto já existe!");
    }

    this.produtosRepository.salvar({ nome, descricao, preco });
  }

  obterTodos(): Produtoo[] {
    return this.produtosRepository.obterTodos();
  }
}

export { ProdutosService };
