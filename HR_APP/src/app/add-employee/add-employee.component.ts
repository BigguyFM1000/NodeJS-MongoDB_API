import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employees } from '../../employee/employees.model';
import { CrudService } from '../../Services/crud.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  addForm = new FormGroup({
    fullname: new FormControl(''),
    jobtitle: new FormControl(''),
    email: new FormControl(''),
    phonenumber: new FormControl(''),
    department: new FormControl(''),
  })
  submitted = false;

  constructor(private crudService: CrudService, private router:Router) { }

  ngOnInit(): void {
  }

  AddEmployee(): void {
    this.submitted = true;

    let data = {
      fullname: this.addForm.value.fullname,
      jobtitle: this.addForm.value.jobtitle,
      email: this.addForm.value.email,
      phonenumber: this.addForm.value.phonenumber,
      department: this.addForm.value.department,
      profilepic: this.addForm.value.profilepic
    };

    this.crudService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/dash']);
        },
        error: (e) => console.error(e)
      });
  }

}
