import { Estudiante } from "./estudiante";
import { Grupo } from "./grupo";

export class GrupoxEstudiante{
  idGrupoxEstudiante:number=0
  grupo:Grupo=new Grupo();
  estudiante:Estudiante=new Estudiante();
  fechaacceso:Date=new Date(Date.now())
}
