import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../providers/github.service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {

  username:string;
  user:User;
  repositories:Repository[];

  constructor(private navCtrl: NavController, private navParams: NavParams, private github: GithubService) {
  }

  getUserInfo():void {
    this.github.getUserInfo(this.username).subscribe((data:User) => this.user = data);
    this.github.getRepositoryInfo(this.username).subscribe((data:Repository[]) => this.repositories = data);
    // this.github.mockGetUserInfo(this.username).subscribe((data:User) => this.user = data);
    // this.github.mockGetRepositoryInfo(this.username).subscribe((data:Repository[]) => this.repositories = data);
  }
  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if (this.username) {
      this.getUserInfo();
    }
  }
}
