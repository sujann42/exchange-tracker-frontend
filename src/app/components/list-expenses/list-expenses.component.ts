import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.scss']
})
export class ListExpensesComponent implements OnInit {

  expenses: Expense[] = [];

  filters ={
    keyword : ''
  }
  

  constructor(private _expService: ExpenseService) { }

  ngOnInit(): void {
    this._expService.getExpenses().subscribe(data => this.expenses = data);
  }

  listExpenses(){
    this._expService.getExpenses().subscribe(
      data => this.expenses = this.filterExpenses(data)
    )
  }

  filterExpenses(espenses: Expense[]){
    return espenses.filter((e) =>{
      return e.expense.toLowerCase().includes(this.filters.keyword.toLowerCase());
    })
  }

}
