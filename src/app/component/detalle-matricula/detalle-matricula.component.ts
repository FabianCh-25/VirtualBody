import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-matricula',
  templateUrl: './detalle-matricula.component.html',
  styleUrls: ['./detalle-matricula.component.css']
})
export class DetalleMatriculaComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(public route:ActivatedRoute){}

}
