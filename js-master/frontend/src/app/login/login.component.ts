import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../clases/usuario"
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  jugadores : Usuario[];
  jugador1 : Usuario;
  jugador2 : Usuario;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:1337/usuario").subscribe((data: any[]) =>
    {
      this.jugadores = data
    })
  }

  iniciarSesionJ1 (usuario : string, password: string)
  {

  }

}
