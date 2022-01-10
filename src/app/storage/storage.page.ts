import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {

  storageForm: FormGroup;

  constructor(private toastController: ToastController, private storageService: StorageService) { }

  ngOnInit() {
    this.storageForm = new FormGroup({
      localstorage: new FormControl('', )
    });
  }

  sendContactForm() {
    this.storageService.set('sometext',this.storageForm.get('localstorage').value);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: ''+ await this.storageService.get('sometext'),
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
