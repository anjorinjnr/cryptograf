import { Component } from '@angular/core';
import { IonicPage,  Modal, NavController, NavParams , ModalController} from 'ionic-angular';
// import { AddMoreCoinModalPage} from '../add-more-coin-modal/add-more-coin-modal';
/**
 * Generated class for the AddCoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-coin',
  templateUrl: 'add-coin.html',
})
export  class AddCoinPage {

  addMoreModal: Modal;
  modalIsActive: boolean;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showModal();
  }

  hasModal() {

    return this.addMoreModal && this.addMoreModal.isOverlay;
  }
  showModal() {
    this.modalIsActive =  true;
    let modal = this.modalCtrl.create('AddMoreCoinModalPage', {}, {cssClass: 'add-more-modal'});
    modal.present();
  }

}
