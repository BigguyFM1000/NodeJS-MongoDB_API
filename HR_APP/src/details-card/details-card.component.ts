import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../Services/crud.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit {
  userUpdate: any;
  userInfo:any 

  employeeDetail = {
    fullname: '',
    jobtitle: '',
    email: '',
    phonenumber: '',
    department: ''
  };

  constructor(private crudService: CrudService, private actived:ActivatedRoute) { }

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
       console.log(this.userInfo)
      }
    })
  }

}
