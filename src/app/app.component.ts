import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navigation', url: '/navigation', icon: 'map' },
    { title: 'NavigationDetail', url: '/navigation-detail', icon: 'locate' },
    { title: 'Zahlen', url: '/zahlen', icon: 'calculator' },
    { title: 'String', url: '/string', icon: 'chatbox' },
    { title: 'Objekte', url: '/objekte', icon: 'planet' },
    { title: 'Array', url: '/array', icon: 'barcode' },
    { title: 'Data Binding', url: '/data', icon: 'analytics' },
    { title: 'Rechner', url: '/rechner', icon: 'calculator' },
    { title: 'Alerts', url: '/alerts', icon: 'alert-circle' },
    { title: 'Newsletter', url: '/newsletter', icon: 'newspaper' },
  ];
  constructor() {}
}
