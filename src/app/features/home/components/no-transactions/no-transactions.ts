import { Component } from '@angular/core';
import { MatCard, MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-no-transactions',
  imports: [MatCard, MatCardModule],
  templateUrl: './no-transactions.html',
  styleUrl: './no-transactions.scss',
})
export class NoTransactions {

}
