import { Router } from '@angular/router';
import { routing } from './../app.routing';
import { UserService } from './../service/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MaterialModule } from '../material/material.module';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  logo = 'assets/img/decora.png';

  user = {
    email: '',
    password:''
  }
  
  constructor(private userService:UserService, private routing: Router){
      
  }
  
  login(){
    var storage = this.userService.getUsers();
    for (let i = 0; i < storage.length; i++) {
      if (storage[i].email == this.user.email && storage[i].password == this.user.password) {
        localStorage.setItem('userLogged',JSON.stringify(storage[i]));
        localStorage.setItem('login','true');
        this.routing.navigate(['/home']);
        return;
      }
    }
    alert('senha incorreta');
  }

  ngOnInit() {
  }

}
