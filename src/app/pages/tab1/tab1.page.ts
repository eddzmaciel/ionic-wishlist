import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listaPendientes: any[] = [];
  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController) {
    this.listaPendientes = deseosService.listas;
  }

  async agregarLista() {
    //this.router.navigateByUrl('/tabs/tab1/agregar');
    const alert = await this.alertController.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
          }
        },
        {
          text: "Crear",
          handler: (data) => {
            console.log(data);
            if (data.titulo.length === 0) {
              return;
            }
            const listaId = this.deseosService.crearLista(data.titulo);
            //retornamos el id y despues vamos a navegar a esta nueva lista creada con su Id
            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          }
        }
      ]
    });

    alert.present();
  }
}