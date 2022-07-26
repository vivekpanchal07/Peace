import { Component, OnInit } from '@angular/core';
import { Model } from 'src/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  model = new Model();

  getMessage(){
    return this.model.mess;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
