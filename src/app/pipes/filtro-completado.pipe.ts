import { Lista } from './../models/lista.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCompletado',
  //por default los pipes son puros, quiere decir que los cambios que detecte solo se van
  //a ver reflejados cuando se hagan en el componente donde esta haciendo el cambio
  //para evitar eso tenemos que colocar lo siguiente
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {
  //este va a recibir un arreglo tipo Lista[] y va a retornar un arrego tipo Lista ():Lista[]
  transform(listas: Lista[], completada: boolean = true): Lista[] {
    //retornar todas las listas que esten terminadas
    return listas.filter(lista => lista.terminada === completada);
  }

}
