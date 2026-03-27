import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { TransactionsService } from '../../../../../shared/transaction/service/transactions.service';
import { Transaction } from '../../../../../shared/transaction/interfaces/transactions';

export const getTransactionsResolver: ResolveFn<Transaction[]> = (route, state) => {
  const transactionsService = inject(TransactionsService);
  
  return transactionsService.getAll()


};
