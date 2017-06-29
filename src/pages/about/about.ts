import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('map' ) mapElement;
  map: any;
  latitude: any;
  longitude: any;
  marker: any;
  marker2:any;

  constructor(public navCtrl: NavController,public geolocation: Geolocation) {
  
  }

  async getLocation(){
  await
  this.geolocation.getCurrentPosition().then((resp) => {
    this.latitude = resp.coords.latitude;
    this.longitude = resp.coords.longitude;
    // console.log(this.latitude)
    // console.log(this.longitude)
  console.log("Location fetched")
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.initMap() 
  }

  ionViewDidLoad(){
    this.getLocation()
  }


  initMap(){
    // console.log(this.latitude)
    // console.log(this.longitude)
    console.log("Init Map started")
    let latLng = new google.maps.LatLng(this.latitude,this.longitude); 

    let mapOption = {
      center: latLng,
      zoom : 10,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    } 

    this.map = new google.maps.Map(this.mapElement.nativeElement,mapOption);

    this.marker = new google.maps.Marker({
          map: this.map, 
          position: this.map.getCenter(),
          animation : google.maps.Animation.DROP  
    })

    this.marker2 = new google.maps.Marker({
          map: this.map, 
          position: new google.maps.LatLng(23.282799, 72.645606),
          animation : google.maps.Animation.DROP  
    })
    
  }

}




// import { Component } from '@angular/core';
// import { NavController,ViewController } from 'ionic-angular';
// import { HomePage } from '../home/home'

// @Component({
//   selector: 'page-about',
//   templateUrl: 'about.html'
// })
// export class AboutPage {

//   constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

//   }

//   popPage(){
//     this.navCtrl.pop(AboutPage)
//   }

//   closeModal(){
//     this.viewCtrl.dismiss({ name : "ajay"})
//   }

// }

