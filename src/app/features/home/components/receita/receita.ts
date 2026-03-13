import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { TransactionDialog } from '../transaction-dialog/transaction-dialog';

@Component({
  selector: 'app-receita',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule
  ],
  templateUrl: './receita.html',
  styleUrl: './receita.scss',
})
export class Receita {

  constructor(private dialog: MatDialog) {}

  abrirReceita() {
    this.dialog.open(TransactionDialog, {
      width: '400px'
    });
  }

  abrirDespesa() {
    this.dialog.open(TransactionDialog, {
      width: '400px'
    });
  }

}
