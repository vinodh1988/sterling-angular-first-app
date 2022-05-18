import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './components/box/box.component';
import { TaskComponent } from './components/task/task.component';
import { RectangleComponent } from './components/task/rectangle/rectangle.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    TaskComponent,
    RectangleComponent //components, directives and pipes need to be specified
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule //if you want to use components ,services, pipes, directives and pipes
                     //from other modules ,import the module here
  ],
  providers: [],//services which need to be injected across the module - not mandatory
  bootstrap: [AppComponent]//components which are called in index.html
})
export class AppModule { }
