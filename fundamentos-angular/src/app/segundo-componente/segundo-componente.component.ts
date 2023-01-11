import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
    nome = "João";
    dataNascimento = "1995-01-01";
    urlImagem ="/assets/joao.jpg";

    mostrarDataNascimento() {
      alert(`A idade do joao é: ${this.dataNascimento}`)
    }
 }
