import { Curso } from "./curso";
import { Aula } from "./aula";
import { Docente } from "./docentes";
import { Matricula } from "./matricula";

export class DetalleMatricula{
  idDetalleMatricula:number = 0;
  fechaInscripcion:Date = new Date();
  matricula: Matricula = new Matricula();
  docente: Docente = new Docente();
  aula: Aula = new Aula();
  curso: Curso = new Curso();
}
