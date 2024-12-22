import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee.models';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  employee: Employee = {
    employeeFirstName: '',
    employeeLastName: '',
    employeePhone: '',
    employeeEmail: '',
    employeeSalary: 0
  };

  constructor(private employeeSerivce:EmployeeService) {}

  onSubmit(): void {
    console.log('Employee Data:', this.employee);
    this.createEmployee();
  }

  createEmployee(): void {
    // Assuming saveEmployee() returns an Observable, so we subscribe to handle the response
    this.employeeSerivce.saveEmployee(this.employee).subscribe({
      next: (response) => {
        console.log('Employee saved successfully:', response);
       
      },
      error: (err) => {
        console.error('Error saving employee:', err);
      
      }
    });
  }
}
