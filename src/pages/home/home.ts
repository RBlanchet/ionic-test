import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TestPage} from "../test/test";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  testBoutton() {
    this.navCtrl.push(LoginPage)
  }

}
