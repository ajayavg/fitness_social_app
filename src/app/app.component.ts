import { Component } from '@angular/core';

import { Login } from '../pages/login/login';
// import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = Login;
  
  constructor() {
    
  }


}