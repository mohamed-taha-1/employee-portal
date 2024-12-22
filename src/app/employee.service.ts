import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl= 'http://localhost:8080/employees'

  constructor(private http: HttpClient) { }

  saveEmployee(employee: Employee): Observable<Employee>{
      return this.http.post<Employee>(this.baseUrl, employee);
  }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }
  

}
