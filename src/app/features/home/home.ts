import { Component, signal } from '@angular/core';
import { Balance } from "./components/balance/balance";
import { TransationsItem } from "./components/transations-item/transations-item";
import { Transaction } from '../../shared/transaction/interfaces/transactions';
import { TransactionType } from '../../shared/transaction/enums/transaction-type';
import { NoTransactions } from "./components/no-transactions/no-transactions";
import { Title } from '@angular/platform-browser';
import { Receita } from "./components/receita/receita";

@Component({
  selector: 'app-home',
  imports: [Balance, TransationsItem, NoTransactions, Receita],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
transactions = signal<Transaction[]>([
    {
        title: 'Venda de Pc',
        value: 5000,
        type: TransactionType.INCOME

    },
    {
        title: 'Aluguel',
        value: 1000,
        type: TransactionType.OUTCOME 
    },
    {
      title: 'BICO',
      value: 100,
      type: TransactionType.INCOME
    },
    {
      title: 'Conta de Luz',
      value: 800,
      type: TransactionType.OUTCOME
    },
    {
      title: 'internet',
      value: 100,
      type: TransactionType.OUTCOME
    }

]);
}
