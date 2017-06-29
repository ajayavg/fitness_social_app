import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth } from '../../providers/auth';

@Component({
  selector: 'page-userprofile',
  templateUrl: 'userprofile.html'
})
export class UserProfilePage {
  yourdata: any;

  constructor(public navCtrl: NavController, public auth:Auth) {
    //  this.fetchData()
  }

  ionViewDidLoad(){
    this.fetchData()
  }

  fetchData(){
    this.auth.getInfo().subscribe(data => {
        this.yourdata = data.response;
        console.log(this.yourdata);
    })
  }
  
}
