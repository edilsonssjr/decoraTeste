import { FilterPipe } from './../filter.pipe';
import { Router } from '@angular/router';
import { routing } from './../app.routing';
import { UserService } from './../service/user.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { MaterialModule } from '../material/material.module';


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

  

  logout(){
    localStorage.removeItem('login');
    this.routing.navigate(['/']);
  }
  
  ngOnInit() {
  }

}
