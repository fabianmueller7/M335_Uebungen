import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.page.html',
  styleUrls: ['./string.page.scss'],
})
export class StringPage implements OnInit {

  myString = 'Welt!';

  constructor() { }

  ngOnInit() {
  }

}
