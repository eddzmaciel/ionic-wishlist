
import { IonicModule } from '@ionic/angular';

import { NgModule } from '@angular/core';

//this contains all the common of angular like *ngIf *ngFor
import { CommonModule } from '@angular/common';


//importing the local components
import { ListasComponent } from './listas/listas.component';

//si queremos usar el modulo de pipes, tenemos que importarlo a este modulo
import { PipesModule } from './../pipes/pipes.module';


@NgModule({
  //for all the local component that we will use in this module
  declarations: [ListasComponent],
  //for use the local component in the entire application
  exports: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
