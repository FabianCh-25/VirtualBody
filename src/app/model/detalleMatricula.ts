import { Curso } from "../curso.model";
import { Aula } from "./aula";
import { Docente } from "./docentes";

export class DetalleMatricula{
  idDetalleMatricula:number = 0;
  fechaInscripcion:Date = new Date();
  docente: Docente = new Docente();
  aula: Aula = new Aula();
  //curso: Curso = new Curso();
}
