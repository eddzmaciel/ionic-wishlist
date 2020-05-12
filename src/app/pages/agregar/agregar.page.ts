import { Lista } from './../../models/lista.model';
import { ListaItem } from "./../../models/lista-item.model";
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from './../../services/deseos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem = '';

  constructor(
    private deseosService: DeseosService,
    private activatedRoute: ActivatedRoute) {
    const listaId = this.activatedRoute.snapshot.paramMap.get('listaId');
    this.lista = this.deseosService.obtenerLista(listaId);
  }

  ngOnInit() {
  }

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
    this.deseosService.guardarStorage();
  }

}




