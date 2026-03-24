import { Component, inject, OnInit, signal } from '@angular/core';
import { Balance } from "./components/balance/balance";
import { TransationsItem } from "./components/transations-item/transations-item";
import { Transaction } from '../../shared/transaction/interfaces/transactions';
import { TransactionType } from '../../shared/transaction/enums/transaction-type';
import { NoTransactions } from "./components/no-transactions/no-transactions";
import { Title } from '@angular/platform-browser';
import { Receita } from "./components/receita/receita";
import { HttpClient } from '@angular/common/http';
import {  TransactionsService } from '../../shared/transaction/service/transactions';

@Component({
  selector: 'app-home',
  imports: [Balance, TransationsItem, NoTransactions, Receita],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  ngOnInit(): void {
    this.transactionsService.getAll().subscribe({
      next: (transactions) => {
        this.transactions.set(transactions);
      }

    })
  }

private transactionsService = inject(TransactionsService);

transactions = signal<Transaction[]>([]);



}

