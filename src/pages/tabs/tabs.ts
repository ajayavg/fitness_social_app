import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { UserProfilePage } from '../userprofile/userprofile';
import { HomePage } from '../home/home';
import { TrackPage } from '../track/track';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = TrackPage;
  tab4Root = UserProfilePage;

  constructor() {

  }
}
