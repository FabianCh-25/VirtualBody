import { Users } from "./users"

export class Estudiante {
  idEstudiante: number = 0
  nombreEstudiante: string = ""
  apellidoEstudiante: string = ""
  correoEstudiante: string = ""
  claveEstudiante: string = ""
  telefonoEstudiante: string = ""
  users: Users=new Users();
}
