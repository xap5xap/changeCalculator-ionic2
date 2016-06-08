import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Payment} from '../../models/payment';
import {CalculateChangeService} from '../../services/calculate-change.service';
/*
  Generated class for the IWillPayPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/i-will-pay/i-will-pay.html',
    providers: [CalculateChangeService]
})
export class IWillPayPage {
    payment: Payment;
    constructor(public nav: NavController, private calculateChangeService: CalculateChangeService) {
        this.payment = new Payment();
    }

    getChange() {
        return this.calculateChangeService.calculateChange(this.payment);
    }
}
