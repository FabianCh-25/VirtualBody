import { Curso } from "./curso";

export class MaterialAcademico{
  idMaterialacademico: number = 0;
  titulomaterial: string = "";
  descripcion: string = "";
  urlarchivo: string = "";
  curso: Curso = new Curso();
}
