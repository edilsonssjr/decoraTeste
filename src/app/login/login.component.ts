import { element } from 'protractor';
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

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:one-line
  loginUser(e) {
  	e.preventDefault();
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
  	
  	if(username == 'admin' && password == 'admin') {
     console.log('DEU');
  	}
  }
  
}
