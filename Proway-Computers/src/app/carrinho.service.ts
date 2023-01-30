import { ASTWithSource } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { IProdutoCarrinho, produto } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  AdicionarAoCarrinho(produto: IProdutoCarrinho) {
    throw new Error('Method not implemented.');
  }
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho(){

    this.itens =  JSON.parse(localStorage.getItem("carrinho") || ""); 
    return this.itens;
  }

  adicionarAoCarrinho( produto : IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }

}
