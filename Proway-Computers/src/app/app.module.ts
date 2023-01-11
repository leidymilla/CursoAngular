import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReaderComponent } from './reader/reader.component';
import { FooterComponent } from './footer/footer.component';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';


@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    FooterComponent,
    NaoEncontradaComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }