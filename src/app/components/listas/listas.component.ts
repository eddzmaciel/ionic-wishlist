import { AlertController, IonList } from '@ionic/angular';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from "../../models/lista.model";
import { DeseosService } from '../../services/deseos.service';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  //sirve para hacer referencia a un elemento Html puede ser local o a un componente 
  //ejemplo referencia a componente
  @ViewChild(IonList, { static: false }) lista: IonList;

  //ejemplo referencia local
  //@ViewChild( 'lista' ) lista: IonList;

  @Input() terminada = false;
  constructor(private router: Router, public deseosService: DeseosService, private alertController: AlertController) {
  }

  ngOnInit() { }

  listaSeleccionada(lista: Lista) {
    if (this.terminada == false) {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`)
    } else {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`)
    }

  }

  borrarLista(lista) {
    this.deseosService.borrarLista(lista);
  }

  async editarLista(item) {
    const alert = await this.alertController.create({
      header: 'Editar Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: item.titulo,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
            this.lista.closeSlidingItems();
          }
        },
        {
          text: "Actualizar",
          handler: (data) => {
            console.log(data);
            if (data.titulo.length === 0) {
              return;
            }
            item.titulo = data.titulo;
            this.deseosService.guardarStorage();
            //este es para cerrar el elemento sliding de ionic
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
    alert.present();

  }

}
