import { Component } from '@angular/core';
import { appdata } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleAPP';
  developers = ["Narayan","Hari","Joseph","Alex","Naveen"]
  theme ="theme1"
  font="Courier"
  parentdata = appdata

  changeTheme(){
    this.theme= this.theme=="theme1"? "theme2":"theme1";
  }

}
