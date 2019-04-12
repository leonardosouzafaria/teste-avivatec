import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';

import * as M from 'node_modules/materialize-css/dist/js/materialize.js';
import { PacoteEmprestimoService } from 'src/app/service/pacote-emprestimo.service';
import { PacoteEmprestimo } from 'src/app/model/pacote-emprestimo';
import { Formulario } from 'src/app/model/formulario';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'avt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('modal') modal: ElementRef;

  pacotesEmprestimo: PacoteEmprestimo[] = [];

  pacoteSelecionado: PacoteEmprestimo;

  formulario = this.fb.group(new Formulario());

  formularioEnviado: boolean;


  constructor(private pacoteEmprestimoService: PacoteEmprestimoService, private fb: FormBuilder) { }

  ngOnInit() {
    this.pacoteEmprestimoService.getPacotesEmprestimo().subscribe((reponse: PacoteEmprestimo[]) => {
      this.pacotesEmprestimo = reponse.sort((a, b): number => {
        if (a.valor < b.valor) {
          return -1;
        } else if (a.valor > b.valor) {
          return 1;
        } else {
          return 0;
        }
      });
    })
  }

  abrirMenu(): void {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, {});
  }


  abrirForm(pacote: PacoteEmprestimo): void {
    this.formularioEnviado = false;
    this.pacoteSelecionado = pacote;
    const instances = M.Modal.init(this.modal.nativeElement);
    instances.open();
  }

  enviar(valor: number): void {
    let formulario: Formulario = Object.assign({}, this.formulario.value);
    formulario.valor = valor;

    localStorage.setItem('nome', formulario.nome.toString());
    localStorage.setItem('email', formulario.email.toString());
    localStorage.setItem('comentario', formulario.comentario.toString());
    localStorage.setItem('valor', formulario.valor.toString());

    this.formularioEnviado = true;

  }
}

