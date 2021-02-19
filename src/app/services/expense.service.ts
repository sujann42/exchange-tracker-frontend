import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Expense } from '../models/expense';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private getURL: string = "http://localhost:8080/api/v1/expenses";

  constructor(private _httpClient: HttpClient){}

  getExpenses(): Observable<Expense[]>{

    return this._httpClient.get<Expense[]>(this.getURL).pipe(map(response => response))

  }

  saveExpense(expense: Expense): Observable<Expense>{
    return this._httpClient.post<Expense>(this.getURL, expense);
  }

  getSingleExpense(id: number): Observable<Expense>{
    return this._httpClient.get<Expense>(`${this.getURL}/${id}`).pipe(map(response => response))
  }

  deleteExpense(id: number):Observable<any>{
    return this._httpClient.delete(`${this.getURL}/${id}`, {responseType: 'text'});

  }

}













