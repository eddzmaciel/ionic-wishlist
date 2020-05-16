import { NgModule } from '@angular/core';
import { FiltroCompletadoPipe } from './filtro-completado.pipe';
// import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FiltroCompletadoPipe],
  // imports: [
  //   CommonModule
  // ]
  exports: [FiltroCompletadoPipe]
})
export class PipesModule { }
