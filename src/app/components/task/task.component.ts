import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
nobx:any=0;
fcolor:any;
bgcolor:any;
ffamily:string="Arial";
numarray:number[]=[]
  constructor() { }

  ngOnInit(): void {
  }
  
  fillarray():void{
    this.numarray=[]
    for(let x=0;x<this.nobx;x++)
       this.numarray=[...this.numarray,x]

  }
}
