import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grupoxestudiante',
  templateUrl: './grupoxestudiante.component.html',
  styleUrls: ['./grupoxestudiante.component.css']
})

export class GrupoxestudianteComponent implements OnInit{
  ngOnInit():void{

  }

  constructor (public route:ActivatedRoute){

  }

}
