import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employees } from '../employee/employees.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  addForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
  })
  submitted = false;

  constructor(private crudService: CrudService, private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(): void {
    this.submitted = true;

    let data = {
      firstname: this.addForm.value.firstname,
      lastname: this.addForm.value.lastname,
      email: this.addForm.value.email,
      address: this.addForm.value.address,
      phone: this.addForm.value.phone
    };
    this.crudService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/home']);
        },
        error: (e) => console.error(e)
      });
  }

}
