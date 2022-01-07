import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.page.html',
  styleUrls: ['./newsletter.page.scss'],
})
export class NewsletterPage implements OnInit {

  contactForm: FormGroup;
  printersrc = './../../assets/newsletterprinter.gif';

  constructor(public toastController: ToastController) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      email: new FormControl('',  Validators.email)
    });
  }

  sendContactForm() {
    console.log('Email: ' + this.contactForm.get('email').value);
    this.presentToast(this.contactForm.get('email').value);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: ''+ message,
      duration: 2000
    });
    toast.present();
  }

}
