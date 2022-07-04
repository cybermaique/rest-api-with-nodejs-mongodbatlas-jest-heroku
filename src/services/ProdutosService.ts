import { Produtoo } from "../model/Produtoo";
import { IProdutoRepository } from "../repositories/IProdutoRepository";

interface IRequest {
  nome: string;
  descricao: string;
  preco: number;
}

class ProdutosService {
  //injecao dependencia
  constructor(private produtosRepository: IProdutoRepository) {}

  salvarProduto({ nome, descricao, preco }: IRequest): void {
    const produtoExiste = this.produtosRepository.obterPorNome(nome);

    //validacao
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
