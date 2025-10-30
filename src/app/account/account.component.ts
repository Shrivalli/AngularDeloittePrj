import { Component } from '@angular/core';
import { Account } from '../../Models/Account';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  imports: [CommonModule,FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  accounts: Account[] = [
    { id: 101, owner: 'Alice Johnson', balance: 5000, type: 'Savings' },
    { id: 102, owner: 'Bob Smith', balance: 12500, type: 'Checking' },
    { id: 103, owner: 'Charlie Brown', balance: 250, type: 'Savings' }
  ];

  newOwner = '';
  newBalance = 0;
  selected?: Account;

  addAccount(): void {
    if (!this.newOwner.trim()) return;
    this.accounts.push({
      id: Date.now(),
      owner: this.newOwner.trim(),
      balance: Number(this.newBalance) || 0
    });
    this.newOwner = '';
    this.newBalance = 0;
  }

  removeAccount(index: number): void {
    this.accounts.splice(index, 1);
    this.selected = undefined;
  }

  selectAccount(acc: Account): void {
    this.selected = acc;
  }

  onBalanceChange(acc: Account): void {
    if (acc.balance < 0) acc.balance = 0;
  }

  get totalFunds(): number {
    return this.accounts.reduce((s, a) => s + a.balance, 0);
  }
}


