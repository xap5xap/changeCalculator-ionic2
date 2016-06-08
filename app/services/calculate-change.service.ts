import { Injectable } from '@angular/core';
import {Payment} from '../models/payment';

@Injectable()
export class CalculateChangeService {

  constructor() { }

  calculateChange(payment: Payment) {
    return (payment.Paid - Number(payment.price || 0)).toFixed(2);
  }

  calculatePaymentAmmount(payment: Payment, desiredChange: number) {
    let amount: number;
    amount = Number(payment.price || 0) + Number(desiredChange || 0);
    return amount.toFixed(2);
  }


}
