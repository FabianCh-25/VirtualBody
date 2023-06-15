import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-material-academico',
  templateUrl: './material-academico.component.html',
  styleUrls: ['./material-academico.component.css']
})
export class MaterialAcademicoComponent implements OnInit{
  ngOnInit(): void {

  }
  constructor(public route:ActivatedRoute){}

}
