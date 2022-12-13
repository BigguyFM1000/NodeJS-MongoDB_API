import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employees';
import { Employees } from '../employee/employees.model';

const baseUrl = 'http://localhost:5050/api/';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employees[]> {
    return this.http.get<Employees[]>(baseUrl+'getAllEmployees');
  }

  get(id: any): Observable<Employees> {
    return this.http.get(`${baseUrl}getEmployee/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl+'addEmployee', data);
  }

  update(employeeInfo: any,id: any): Observable<any> {
    return this.http.put(`${baseUrl}updateEmployee/${id}`, employeeInfo);
  }

  delete(id: Employee): Observable<any> {
    return this.http.delete(`${baseUrl}deleteEmployee/${id.id}`);
  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(`${baseUrl}deleteAll`);
  // }

  // findById(id: any): Observable<Tutorial[]> {
  //   return this.http.get<Tutorial[]>(`${baseUrl}/?id=${id}`);
  // }
}
