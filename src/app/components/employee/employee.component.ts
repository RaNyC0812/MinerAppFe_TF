import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router } from 'express';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [

    ListEmployeeComponent,
    RouterOutlet,
    CommonModule
    ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})



export class EmployeeComponent implements OnInit {
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {}

}
