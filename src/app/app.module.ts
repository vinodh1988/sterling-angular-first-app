import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent //components, directives and pipes need to be specified
  ],
  imports: [
    BrowserModule,
    AppRoutingModule //if you want to use components ,services, pipes, directives and pipes
                     //from other modules ,import the module here
  ],
  providers: [],//services which need to be injected across the module - not mandatory
  bootstrap: [AppComponent]//components which are called in index.html
})
export class AppModule { }
