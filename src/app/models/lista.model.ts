
import { ListaItem } from "./lista-item.model";
// capitalice first letter
export class Lista {
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor(titulo: string) {
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];
        //just to generate the id for this example
        this.id = new Date().getTime();
    }
}