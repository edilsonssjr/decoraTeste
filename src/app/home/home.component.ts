import { Router } from '@angular/router';
import { routing } from './../app.routing';
import { UserService } from './../service/user.service';
import { Component, OnInit} from '@angular/core';
import { MaterialModule } from '../material/material.module'; 
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logo = 'assets/img/decora.png';

  users = []; 
  userLogged:any;


  constructor(private userService:UserService, private routing: Router) {
   this.users = this.userService.getUsers();
   this.userLogged = this.userService.getUserLogged();
  }
  

  displayedColumns = ['cpf', 'nome', 'email', 'password', 'perfil'];
  dataSource = new MatTableDataSource(this.userService.getUsers());
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  logout(){
    localStorage.removeItem('login');
    localStorage.removeItem('userLogged');
    this.routing.navigate(['/']);
  }
  
  ngOnInit() {
  }

}

export interface Element {
  cpf: '';
  nome: '';
  email: '';
  password: '',
  perfil: '';
}
