import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { FormControl, FormGroup, FormsModule} from '@angular/forms';
import { Employees } from '../../employee/employees.model';
import { CrudService } from '../../Services/crud.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  editForm = new FormGroup({
    fullname: new FormControl(''),
    jobtitle: new FormControl(''),
    email: new FormControl(''),
    phonenumber: new FormControl(''),
    department: new FormControl(''),
  })

  message = '';
  userUpdate: any;
  userInfo:any
  id:any  

  constructor(private crudService: CrudService, private router: Router, private actived:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("employee_id");
    console.log(this.id)
    this.getById(this.id)
  }

  getById(userId:number){
    
    return this.crudService.get(userId).subscribe({
      next:data =>{
       this.userUpdate = data
       console.log(this.userUpdate);
       
       this.userInfo = this.userUpdate[0]
      //  console.log(this.userInfo);
       
      }
    })
  }

  updateEmployee(){
    let id =  this.userUpdate._id
    console.log(id);
    
    // let data = {
    //   fullname: this.editForm.value.fullname,
    //   jobtitle: this.editForm.value.jobtitle,
    //   email: this.editForm.value.email,
    //   phonenumber: this.editForm.value.phonenumber,
    //   department: this.editForm.value.department
    // };
    
    var user = {
      fullname:  this.userUpdate.fullname,
      jobtitle:  this.userUpdate.jobtitle ,
      email:  this.userUpdate.email ,
      phonenumber:  this.userUpdate.phonenumber ,
      department:  this.userUpdate.department ,
    }
    console.log(user);
    
    this.crudService.update(user, id).subscribe({
     next:data =>{
      this.router.navigate(['/dash'])
     }
    })
  }
}
