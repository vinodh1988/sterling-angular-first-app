import { Component, Input, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() title:any;
  @Input('items')  values:any;
  @Output() getItem:EventEmitter<string>=new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  whenClicked(x:string){
    this.getItem.emit(x);
  }
}
