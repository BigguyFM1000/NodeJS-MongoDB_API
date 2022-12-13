import { Component, OnInit, Input  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employees } from '../employee/employees.model';
import { CrudService } from '../Services/crud.service';
import { Employee } from '../employee/employees';
import { UpdateModule } from '../employee/update.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myEmployeeList: any;
  @Input() currentTutorials: Employees = {
    id: '',
    fullname: '',
    jobtitle: '',
    email: '',
    phonenumber: '',
    department: ''
  };
  // employeeDetail: UpdateModule = new UpdateModule
  employees: any;
 
  currentTutorial: Employees = {};
  currentIndex = -1;
  id = '';

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
    this.retrieveEmployees();
  }

  AddEmployee(): void {
    this.submitted = true;

    let data = {
      fullname: this.addForm.value.fullname,
      jobtitle: this.addForm.value.jobtitle,
      email: this.addForm.value.email,
      phonenumber: this.addForm.value.phonenumber,
      department: this.addForm.value.department
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

  saveEmployee(){

  }

  retrieveEmployees(): void {
    this.crudService.getAll().subscribe({
        next: (data) => {
          this.employees = data;
           console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  deleteEmployee(emplyId: Employee): void {
    this.crudService.delete(emplyId)
      .subscribe({
        next: (res) => {
          console.log(res);
          window.location.reload();
          // this.router.navigate(['/home']);
        },
        error: (e) => console.error(e)
      });
  }

}
