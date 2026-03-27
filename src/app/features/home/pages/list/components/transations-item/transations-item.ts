import { Component, input, output } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import {MatCardModule} from "@angular/material/card"
import { TransactionValue } from "./components/transaction-value/transaction-value";
import {  MatIconModule } from "@angular/material/icon";
import { Transaction } from '../../../../../../shared/transaction/interfaces/transactions';
@Component({
  selector: 'app-transations-item',
  imports: [MatCardModule, TransactionValue, MatIconModule, MatFabButton],
  templateUrl: './transations-item.html',
  styleUrl: './transations-item.scss',
})
export class TransationsItem {
  transation = input.required<Transaction>();

  edit = output<Transaction>();
  remove = output<Transaction>();
}
