import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit{
    ngOnInit(): void {

    }
    constructor(public route:ActivatedRoute){

    }
  }
