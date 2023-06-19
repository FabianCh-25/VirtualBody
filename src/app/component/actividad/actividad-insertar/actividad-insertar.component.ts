import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Actividad } from 'src/app/model/actividad';
import { ActividadService } from 'src/app/service/actividad.service';
import * as moment from 'moment'; // ro npm install moment


@Component({
  selector: 'app-actividad-insertar',
  templateUrl: './actividad-insertar.component.html',
  styleUrls: ['./actividad-insertar.component.css']
})
export class ActividadInsertarComponent implements OnInit {
  id:number=0;
  edicion: boolean=false;

  form: FormGroup = new FormGroup({});
  actividad: Actividad = new Actividad();
  mensaje: string = 'Gaaa';
  minFecha: Date = moment().toDate();
  maxFecha: Date = moment().add(5, 'months').toDate();
  constructor(private aS: ActividadService, private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    })
    ////////////!
    this.form = new FormGroup({
      id: new FormControl(),
      Titulo: new FormControl(),
      Descripcion: new FormControl(),
      FechaPublicacion: new FormControl(),
      FechaEntrega: new FormControl(),
    });
  }

  aceptar(): void {
    this.actividad.idActividad = this.form.value['id'];
    this.actividad.titulo = this.form.value['Titulo'];
    this.actividad.descripcion = this.form.value['Descripcion'];
    this.actividad.fechaPublicacion = this.form.value['FechaPublicacion'];
    this.actividad.fechaEntrega = this.form.value['FechaEntrega'];
    // validamos q' campo titulo no este vacío
    if (this.form.value['Titulo'].length > 0 ) {
      if(this.edicion){
        //Guardas lo actualizado
        this.aS.update(this.actividad).subscribe(()=>{
          this.aS.list().subscribe((data)=>{
            this.aS.setList(data);
          })
        })
      }
      else{
        this.aS.list().subscribe((data)=>{
          const repeatedObject=data.find(item =>item.idActividad ==this.actividad.idActividad);
          if(repeatedObject){
            // El ID ya existe, muestra un mensaje de error o realiza alguna acción apropiada
            console.log('El ID ya existe, por favor ingrese otro ID.');
            return;

          }
          // Si el ID no existe, continúa con la inserción del objeto
          this.aS.insert(this.actividad).subscribe((data) => {
            this.aS.list().subscribe((data) => {
              this.aS.setList(data);
            })
          });
        })


      }


      this.mensaje = 'INgreso los campos de verda';
      this.router.navigate(['/inicio/actividades']);

    }
    else {
      this.mensaje = 'Ingrese un Título!!';
    }
  }

  //Gaaaaaaaaaaaaa
  init() {
    if(this.edicion){
      this.aS.listId(this.id).subscribe((data)=>{
        this.form = new FormGroup({
          id: new FormControl(data.idActividad),
          Titulo: new FormControl(data.titulo),
          Descripcion: new FormControl(data.descripcion),
          FechaPublicacion: new FormControl(data.fechaPublicacion),
          FechaEntrega: new FormControl(data.fechaEntrega)
        })
      })   }
  }

}

