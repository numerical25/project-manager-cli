import { Injectable } from '@angular/core';
import {async} from "rxjs";
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    protected toastSerivce: ToastController
  ) { }

  async showMessage(message = 'No Current Message') {
    const toast = await this.toastSerivce.create({
      message: message,
      duration: 1500,
      position: 'top'
    });
    await toast.present();
  }
}
