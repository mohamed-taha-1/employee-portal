import { Routes,RouterModule } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeComponent } from './employee/employee.component';
export const routes: Routes = [
    { path: 'create-employee', component: EmployeeFormComponent },
    { path: 'all-employees', component: EmployeeComponent },
];
