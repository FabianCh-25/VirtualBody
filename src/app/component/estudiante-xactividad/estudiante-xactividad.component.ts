import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estudiante-xactividad',
  templateUrl: './estudiante-xactividad.component.html',
  styleUrls: ['./estudiante-xactividad.component.css']
})
export class EstudianteXActividadComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(public route:ActivatedRoute){}
}
