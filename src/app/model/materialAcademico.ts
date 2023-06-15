import { Curso } from "./curso";

export class MaterialAcademico{
  idmaterialacademico: number = 0;
  titulomaterial: string = "";
  descripcion: string = "";
  urlarchivo: string = "";
  curso: Curso = new Curso();
}
