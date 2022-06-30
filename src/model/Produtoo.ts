class Produtoo {
    id: string;
    preco: number;
    nome: string;
    descricao: string;
  
    create_at: Date;
  
    // ? significa que o atributo é opcional, para não precisarmos colocar o update agora.
    update_at?: Date;
  }
  
  export { Produtoo };