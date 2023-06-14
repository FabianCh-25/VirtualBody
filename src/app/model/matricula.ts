import { Estudiante } from "./estudiante";

export class Matricula{
  idMatricula: number = 0;
  estudiante: Estudiante = new Estudiante();
  fechaPagoMatricula: Date = new Date();
  costoMatricula: number = 0;
}
