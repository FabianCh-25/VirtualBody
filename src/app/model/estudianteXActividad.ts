import { Actividad } from "./actividad";
import { Estudiante } from "./estudiante";

export class EstudianteXActividad{
  idExA:number = 0;
  act:Actividad = new Actividad();
  estudiante: Estudiante = new Estudiante();
  calificacion: number =0;
}
