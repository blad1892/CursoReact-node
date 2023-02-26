
import {LEVELS} from "./models/levels.enum";

export class Task{

   name='';
   descripcion ='';
   complet = false;
   levels = LEVELS.NORMAL;


constructor(name, descripcion,complet,levels){
    this.name=name;
    this.descripcion=descripcion;
    this.complet=complet;
    this.levels=levels;
}

}