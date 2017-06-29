import { Component } from '@angular/core';
import { NavController , ModalController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  post: any;

  constructor(public navCtrl: NavController,public modalCtrl : ModalController, public auth:Auth, public iab: InAppBrowser) {
    
  }


  ionDidWillEnter(){
    this.posts()
  }

  ionViewWillEnter(){
    this.posts()
  }

  
  posts(){

    this.auth.getPosts().subscribe(data => {
        this.post = data;
        console.log(this.post);
    })
  }

  open(url){
      let browser = this.iab.create(url);
      browser.show();
  }
  
}
