import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logo = 'assets/img/decora.png';

  constructor() { }

  ngOnInit() {
  }

}
