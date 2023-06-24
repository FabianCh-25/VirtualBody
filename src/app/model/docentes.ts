import { Users } from "./users"

export class Docente{
  idDocente:number=0
  nombre:string=""
  apellidoDocente:string=""
  correoDocente:string=""
  claveDocente:string=""
  telefonoDocente:number=0
  users: Users=new Users();

}
