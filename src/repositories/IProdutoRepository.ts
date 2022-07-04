import { Produtoo } from "../model/Produtoo";

interface ISalvarProdutoDTO {
  nome: string;
  descricao: string;
  preco: number;
}

interface IProdutoRepository {
  salvar({ descricao, nome, preco }: ISalvarProdutoDTO): void;
  obterTodos(): Produtoo[];
  obterPorNome(nome: string): Produtoo;
}

export { IProdutoRepository, ISalvarProdutoDTO };
