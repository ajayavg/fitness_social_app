import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Auth } from '../../providers/auth';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class Register {
  SignupForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth:Auth,public toastCtrl: ToastController) {

     this.SignupForm = new FormGroup({
      'firstname': new FormControl('',Validators.required),
      'lastname': new FormControl('',Validators.required),
      'username': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required),
      'email': new FormControl('',Validators.required)
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  async SignUp(){
    console.log(this.SignupForm.value)
    await
    this.auth.register(this.SignupForm.value).subscribe( (data) => {
      console.log(data)
      
    });
    this.presentToast()    
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'You are successfully registered',
      duration: 3000 ,
      position: 'bottom'

    });
    toast.present();
  }

}


