import { Component, inject, OnInit, signal } from '@angular/core';
import { Balance } from "./components/balance/balance";
import { TransationsItem } from "./components/transations-item/transations-item";
import { Transaction } from '../../shared/transaction/interfaces/transactions';
import { TransactionType } from '../../shared/transaction/enums/transaction-type';
import { NoTransactions } from "./components/no-transactions/no-transactions";
import {  TransactionsService } from '../../shared/transaction/service/transactions.service';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [Balance, TransationsItem, NoTransactions, MatButtonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
private transactionsService = inject(TransactionsService);
private router = inject(Router);

  ngOnInit(): void {
    this.transactionsService.getAll().subscribe({
      next: (transactions) => {
        this.transactions.set(transactions);
      }

    })
  }

edit(transaction: Transaction) {
  this.router.navigate(['/edit', transaction.id])
}


transactions = signal<Transaction[]>([]);



}

