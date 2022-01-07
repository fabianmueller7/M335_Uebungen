import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {

  userData: any = {name: 'Max', vorname: 'Muster', alter : '18'};

  constructor() { }

  ngOnInit() {
  }

}
