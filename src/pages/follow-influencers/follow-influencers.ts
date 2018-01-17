import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/types';
/**
 * Generated class for the FollowInfluencersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-follow-influencers',
  templateUrl: 'follow-influencers.html',
})
export class FollowInfluencersPage {

  following: number[] = [];
  influencers: User[] = [
    {
      id: 1,
      username: 'jamesblake',
      firstname: 'james',
      lastname: 'blake'
    },
    {
      id: 2,
      username: 'mariacastro',
      firstname: 'Maria',
      lastname: 'Castro'
    },
    {
      id: 3,
      username: 'sharonscheider',
      firstname: 'Sharon',
      lastname: 'Schneider'
    },
    {
      id: 4,
      username: 'ralphromero',
      firstname: 'Ralph',
      lastname: 'Romero'
    },
    {
      id: 5,
      username: 'denisefox',
      firstname: 'Denise',
      lastname: 'Fox'
    },
    {
      id: 6,
      username: 'emmaparker',
      firstname: 'Emma',
      lastname: 'Parker'
    },
    {
      id: 7,
      username: 'jeffreyparker',
      firstname: 'Jeffrey',
      lastname: 'Parker'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  follow(user, event) {
    if (!this.isFollowing(user)) {
      this.following.push(user.id);
    }
    event.stopPropagation();
  }
  unfollow(user) {
    this.following = this.following.filter((id) => id === user.id ? false: true);
    
  }
  isFollowing(user) {
    console.log('is following...');
    return this.following.indexOf(user.id) >= 0;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowInfluencersPage');
  }

  showProfile(user) {
    console.log(user);
  }

}
