import { Component, computed, input } from '@angular/core';
import { TransactionType } from '../../../../../../../../shared/transaction/enums/transaction-type';
import { Transaction } from '../../../../../../../../shared/transaction/interfaces/transactions';



const CssClass = {
  [TransactionType.INCOME]: 'income',
  [TransactionType.OUTCOME]: 'outcome'
}

@Component({
  selector: 'app-transaction-value',
  imports: [],
  templateUrl: './transaction-value.html',
  styleUrl: './transaction-value.scss',
  host: {
    '[class]': 'cssClass()'
  }
})
export class TransactionValue {

    transaction = input.required<Transaction>();

    cssClass = computed(() => CssClass [this.transaction().type]);
}
