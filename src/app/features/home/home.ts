import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Balance } from "./components/balance/balance";
import { TransationsItem } from "./components/transations-item/transations-item";
import { Transaction } from '../../shared/transaction/interfaces/transactions';
import { TransactionType } from '../../shared/transaction/enums/transaction-type';
import { NoTransactions } from "./components/no-transactions/no-transactions";
import {  TransactionsService } from '../../shared/transaction/service/transactions.service';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FeedbackService } from '../../shared/feedback/services/feedback.service';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { ConfirmationDialogService } from '../../shared/dialog/confirmation/services/confirmation-dialog.service';


@Component({
  selector: 'app-home',
  imports: [Balance, TransationsItem, NoTransactions, MatButtonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
private transactionsService = inject(TransactionsService);
private feedbackService = inject(FeedbackService);
private router = inject(Router);
private confirmationDialogService = inject(ConfirmationDialogService);

transactions = signal<Transaction[]>([]);

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

remove(transaction: Transaction) {

  this.confirmationDialogService.open({
    title: 'Deletar Transação?',
    message: 'Deseja realmente deletar esta transação?',
    ysBtnText: 'Sim',
    noBtnText: 'Não'
  }).subscribe({
  next: () => {
    this.transactionsService.delete(transaction.id).subscribe({
    next: () => {
      this.removeTransactionFromArray(transaction);

      this.feedbackService.sucess('Transação deletada com sucesso!');
    }
  })
    
  }

})


}
  private removeTransactionFromArray(transaction: Transaction) {
    this.transactions.update(transactions => {
      return this.transactions().filter(t => t.id !== transaction.id);
    });
  }

private getTransactions(){
  this.transactionsService.getAll().subscribe({
    next: (transactions) => {
      this.transactions.set(transactions);
    }
  })
}


}

