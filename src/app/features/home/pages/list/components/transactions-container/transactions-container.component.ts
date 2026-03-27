import { Component, contentChild, input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from "@angular/common";
import { Transaction } from '../../../../../../shared/transaction/interfaces/transactions';

@Component({
  selector: 'app-transactions-container',
  imports: [NgTemplateOutlet],
  templateUrl: './transactions-container.component.html',
  styleUrl: './transactions-container.component.scss',
})
export class TransactionsContainerComponent {
 transactions = input.required<Transaction[]>();
 itemtemplate = contentChild.required<TemplateRef<unknown>>('item')
 noItemstemplate = contentChild.required<TemplateRef<unknown>>('noItems')
}
