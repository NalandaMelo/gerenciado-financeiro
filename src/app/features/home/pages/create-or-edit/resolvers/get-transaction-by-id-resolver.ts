import { ResolveFn } from '@angular/router';
import { Transaction } from '../../../../../shared/transaction/interfaces/transactions';
import { TransactionsService } from '../../../../../shared/transaction/service/transactions.service';
import { inject } from '@angular/core';

export const getTransactionByIdResolver: ResolveFn<Transaction> = (route, state) => {
  
  const transactionService = inject(TransactionsService);

  const id = route.paramMap.get('id') as string;

  return transactionService.getById(id);
};
