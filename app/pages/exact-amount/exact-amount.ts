import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Payment} from '../../models/payment';
import {CalculateChangeService} from '../../services/calculate-change.service';
/*
  Generated class for the ExactAmountPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/exact-amount/exact-amount.html',
    providers: [CalculateChangeService]
})
export class ExactAmountPage {
    payment: Payment;
    desiredChange: number;

    constructor(public nav: NavController, private calculateChangeService: CalculateChangeService) {
        this.payment = new Payment();
    }

    calculatePaymentAmount() {
        return this.calculateChangeService.calculatePaymentAmmount(this.payment, this.desiredChange);
    }
}
