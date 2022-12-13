import { Component, OnInit, Input } from '@angular/core';
import { Employees } from '../employee/employees.model';
import { CrudService } from '../Services/crud.service';
import { Router } from '@angular/router';
import { Employee } from '../employee/employees';
import { UpdateModule } from '../employee/update.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  myEmployeeList: any;
  @Input() currentTutorials: Employees = {
    id: '',
    fullname: '',
    jobtitle: '',
    email: '',
    phonenumber: '',
    department: ''
  };

  // employeeDetail: UpdateModule =  new UpdateModule
  employees: any;
  // tutorials?: Tutorial[];
  currentTutorial: Employees = {};
  currentIndex = -1;
  id = '';

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  viewCard(){
    this.router.navigate(['/view'])
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

  editEmployee(employeeDetail: UpdateModule){
    // this.employeeDetail = {...employeeDetail}
    this.router.navigate(['/edit']);
  }

}