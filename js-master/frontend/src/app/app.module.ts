import { EjemploDialogo } from './modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";
import {rutas} from "./app.routes"
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploDialogo,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  entryComponents: [EjemploDialogo],
  bootstrap: [AppComponent]
})
export class AppModule { }
