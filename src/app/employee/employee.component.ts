import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.models';
import { EmployeeService } from '../employee.service';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService){}

  loadEmployees(){
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees=data;
      }
        
      ,
      error: (error) => {
        console.error("Error fetching employees", error);
      }
    });
  }

  ngOnInit(): void {
      this.loadEmployees();
  }
}
