import { Component, OnInit, Inject } from '@angular/core';
import { MaterialModule } from '../material/material.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logo = 'assets/img/decora.png';

  constructor() { }

  ngOnInit() {
  }

}
