import { Component, inject, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuContent } from "@angular/material/menu";
import { RouterLink, Router } from "@angular/router";
import { ConfirmationDialogService } from "../../../../shared/dialog/confirmation/services/confirmation-dialog.service";
import { FeedbackService } from "../../../../shared/feedback/services/feedback.service";
import { Transaction } from "../../../../shared/transaction/interfaces/transactions";
import { TransactionsService } from "../../../../shared/transaction/service/transactions.service";
import { Balance } from "./components/balance/balance";
import { NoTransactions } from "./components/no-transactions/no-transactions";
import { TransactionsContainerComponent } from "./components/transactions-container/transactions-container.component";
import { TransationsItem } from "./components/transations-item/transations-item";

@Component({
  selector: 'app-list',
  imports: [Balance, TransationsItem, NoTransactions, MatButtonModule, RouterLink, TransactionsContainerComponent, MatMenuContent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
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
