import { Component, OnInit } from '@angular/core';
import {PROJECTS} from '../../myproject'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  Projects = PROJECTS;
  array = [];
  
  constructor() { }
  
  ngOnInit() {
    this.array.push(this.Projects[0]);
    this.array.push(this.Projects[1]);
    this.array.push(this.Projects[2]);
  }
  onScroll(){
    if(this.array.length<this.Projects.length){
      for(let i = 3;i<this.Projects.length;i++){
        this.array.push(this.Projects[i]);
      }
    }
  }


}
