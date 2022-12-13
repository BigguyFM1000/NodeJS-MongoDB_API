import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { FormControl, FormGroup, FormsModule} from '@angular/forms';
import { Employees } from '../employee/employees.model';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  message = '';
  userUpdate: any;
  userInfo:any  

  constructor(private crudService: CrudService, private router: Router, private actived:ActivatedRoute) { }

  ngOnInit(): void {
    let id:number = this.actived.snapshot.params['id'];
    console.log(id)
    this.getById(id)
  }

  getById(userId:number){
    return this.crudService.get(userId).subscribe({
      next:data =>{
       this.userUpdate = data
       this.userInfo = this.userUpdate[0]
      }
    })
  }

  updateEmployee(){
    let id =  this.userInfo.id
    
    var user = {
      firstname:  this.userInfo.firstname,
      lastname:  this.userInfo.lastname ,
      email:  this.userInfo.email ,
      address:  this.userInfo.address ,
      phone:  this.userInfo.phone ,
    }
    this.crudService.update(user, id).subscribe({
     next:data =>{
      this.router.navigate(['/home'])
     }
    })
  }
}
