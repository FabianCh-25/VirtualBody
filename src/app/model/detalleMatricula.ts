import { Docente } from "./docentes";

export class DetalleMatricula{
  idDetalleMatricula:number = 0;
  fechaInscripcion:Date = new Date();
  docente: Docente = new Docente();
}