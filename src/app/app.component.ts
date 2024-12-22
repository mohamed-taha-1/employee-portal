import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-portal';
  constructor(private router: Router) {}
  employeeListLink() {
    this.router.navigate(['/all-employees']);
  }

  createLink() {
    this.router.navigate(['/create-employee']);
  }
  
}
