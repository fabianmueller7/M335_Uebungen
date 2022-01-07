import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {

  name = '';
  buttonPressCounter = 0;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async getNickname() {
    const alert = await this.alertController.create({
      header: 'Wir brauchen dich!',
      message: 'Bitte gib unten deinen Nicknamen an!',
      inputs: [
        {
          name: 'nickname',
          type: 'text',
          placeholder: 'Nickname'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Ok',
          role: 'ok',
        }
      ]
    });

    await alert.present();

    const response = await alert.onDidDismiss();
    if(response.role === 'ok') {
      document.getElementById('output').innerHTML = 'Ich liebe es ' + response.data.values.nickname + ' genannt zu werden!';
    }
    console.log('onDidDismiss resolved with role', response);
  }

  updateCounter() {
    this.buttonPressCounter += 1;
  }
}

