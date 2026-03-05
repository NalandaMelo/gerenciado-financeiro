import { Component, computed, input } from '@angular/core';
import { BalanceCard } from "./components/balance-card/balance-card";

@Component({
  selector: 'app-balance',
  imports: [BalanceCard],
  standalone: true,
  templateUrl: './balance.html',
  styleUrl: './balance.scss',
})
export class Balance {

  transactions = input.required<{value: number, type: 'income' | 'outcome'}[]>();
  
  totalIncomes =  computed(() => {
    this.transactions()
      .filter(item=> item.type === 'income')
      .reduce((total, item) => total + item.value, 0);

});
}//7:15 testando 123 testando