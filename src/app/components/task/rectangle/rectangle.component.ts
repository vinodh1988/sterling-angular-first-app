import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
@Input() fontFamily:any;
@Input() color:any;
@Input() bcolor:any;

cstyle:any;
  constructor() { }

  ngOnInit(): void {
    this.cstyle = {color: this.color,backgroundColor: this.bcolor,fontFamily: this.fontFamily}
  }

}
