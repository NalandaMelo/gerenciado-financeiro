import { Component, signal } from '@angular/core';
import { Balance } from "./components/balance/balance";
import { TransationsItem } from "./components/transations-item/transations-item";
import { Transaction } from '../../shared/transaction/interfaces/transactions';
import { TransactionType } from '../../shared/transaction/enums/transaction-type';

@Component({
  selector: 'app-home',
  imports: [Balance, TransationsItem],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
transactions = signal<Transaction[]>([
  {title: 'Compra de mercadoria', value: 100, type: TransactionType.OUTCOME},
  {title: 'Venda de produto', value: 80, type: TransactionType.INCOME},
  {title: 'Serviço prestado', value: 70, type: TransactionType.INCOME},
  {title: 'Pagamento de conta', value: 50, type: TransactionType.OUTCOME}
]);
}
