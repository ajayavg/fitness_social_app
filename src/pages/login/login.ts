import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { TabsPage } from '../tabs/tabs';
import { Register } from '../register/register';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class Login {
  token:any;
  isLoggedin: any = false;
  loginForm : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth:Auth, public loadingCtrl: LoadingController) {
    
    this.loginForm = new FormGroup({
      'username': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required)
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

     
  async Login(){

    console.log(this.loginForm.value)

    await
    this.auth.getToken(this.loginForm.value).subscribe(data => {
    this.token = data.access_token;
    console.log(this.token);
    localStorage.setItem('id_token',this.token);
    console.log("Token saved");
    this.isLoggedin= true;

    if(this.isLoggedin = true){
      this.navCtrl.setRoot(TabsPage)
    }
    
    });

  }

  loadSignUp(){
      this.navCtrl.push(Register)
  }

}

