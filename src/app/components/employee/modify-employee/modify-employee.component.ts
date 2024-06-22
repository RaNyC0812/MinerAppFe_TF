import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee';

@Component({
  selector: 'app-modify-employee',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './modify-employee.component.html',
  styleUrl: './modify-employee.component.css'
})
export class ModifyEmployeeComponent {
  form: FormGroup;
  employeeId: number;
  editMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      department: ['', Validators.required]
    });
    this.employeeId = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeId = params['id'];
      this.editMode = params['id'] != null;
      if (this.editMode) {
        this.employeeService.listId(this.employeeId).subscribe(employee => {
          this.form.setValue({
            firstName: employee.firstName,
            lastName: employee.lastName,
            department: employee.department
          });
        });
      }
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const employee: Employee = this.form.value;
      if (this.editMode) {
        this.employeeService.update(this.employeeId, employee).subscribe(() => {
          this.router.navigate(['/employee/list']);
        });
      } else {
        this.employeeService.insert(employee).subscribe(() => {
          this.router.navigate(['/employee/list']);
        });
      }
    }
  }
}
