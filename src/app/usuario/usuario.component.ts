import { UserService } from './../service/user.service';
import { Router } from '@angular/router/';
import { routing } from './../app.routing';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  user = {
    cpf: '',
    nome: '',
    email: '',
    password: '',
    perfil: ''
  }

  perfis = [
    { value: '1', viewValue: 'Admin' },
    { value: '2', viewValue: 'Usuario' }
  ];

  constructor(private userService: UserService, private routing: Router) {
  
  }

  submit() {
    this.userService.storeUser(this.user.cpf,this.user.nome,this.user.email,this.user.password,this.user.perfil);
    this.routing.navigate(['/home']);
  }

  ngOnInit() {
  }

}
