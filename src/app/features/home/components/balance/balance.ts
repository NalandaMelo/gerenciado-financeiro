import { Component } from '@angular/core';
import { BalanceCard } from "./components/balance-card/balance-card";

@Component({
  selector: 'app-balance',
  imports: [BalanceCard],
  standalone: true,
  templateUrl: './balance.html',
  styleUrl: './balance.scss',
})
export class Balance {

}
