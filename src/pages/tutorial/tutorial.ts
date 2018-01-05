import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image?: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  // slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.dir = platform.dir();
    // translate.get(["TUTORIAL_SLIDE1_TITLE",
    //   "TUTORIAL_SLIDE1_DESCRIPTION",
    //   "TUTORIAL_SLIDE3_TITLE",
    //   "TUTORIAL_SLIDE3_DESCRIPTION",
    // ]).subscribe(
    //   (values) => {
    //     console.log('Loaded values', values);
    //     this.slides = [
    //       {
    //         title: values.TUTORIAL_SLIDE1_TITLE,
    //         description: values.TUTORIAL_SLIDE1_DESCRIPTION,
    //         // image: 'assets/img/ica-slidebox-img-1.png',
    //       },
    //       // {
    //       //   title: values.TUTORIAL_SLIDE2_TITLE,
    //       //   description: values.TUTORIAL_SLIDE2_DESCRIPTION,
    //       //   //image: 'assets/img/ica-slidebox-img-2.png',
    //       // },
    //       {
    //         title: values.TUTORIAL_SLIDE3_TITLE,
    //         description: values.TUTORIAL_SLIDE3_DESCRIPTION,
    //         // image: 'assets/img/ica-slidebox-img-3.png',
    //       }
    //     ];
    //   });
  }

  @ViewChild(Slides) slides: Slides;

  login() {
    this.navCtrl.setRoot('LoginPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  signUp() {
    this.navCtrl.setRoot('SignupPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    //this.showSkip = !slider.isEnd();
    let currentIndex = this.slides.getActiveIndex();
    if (currentIndex === 1) {
      this.navCtrl.setRoot('WelcomePage', {}, {
        animate: true,
        direction: 'forward'
      });
    }
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
