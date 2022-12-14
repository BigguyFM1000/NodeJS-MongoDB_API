import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../../Services/crud.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit {
  userUpdate: any;
  userInfo:any 
  id:any

  // Profile picture
  public photoUrl = '';
  public showInitials = true;
  public bgColor:string = '';
  public selectedID: any
  public divColor:string = '';
  public initials: string = '';
  public circleColor: string[] = ['#367E18','#790252','#645CAA','#AF0171','#645CAA','#A460ED',
                                  '#42855B','#FF4A4A','#A62349','#FFB200','#781C68','#D61C4E','#FF87B2'];

  // employeeDetail = {
  //   fullname: '',
  //   jobtitle: '',
  //   email: '',
  //   phonenumber: '',
  //   department: ''
  // };

  constructor(private crudService: CrudService, private actived:ActivatedRoute) { 
   
    // const url: string = actived.snapshot.url.join('');
    // const user = actived.snapshot.data.user;
  }

  ngOnInit(): void {
    this.id = this.actived.snapshot.params['_id'];
    console.log(this.id)
    this.getById(this.id)
  }

  getById(userId:number){
    console.log(userId);
    
    return this.crudService.get(userId).subscribe({
      next:data =>{
       this.userUpdate = data
       console.log(this.userUpdate);
       localStorage.clear();
       
       this.userInfo = this.userUpdate[0]

       
      //  console.log(this.userInfo)
      }
    })
    
  }

  clear(){
    localStorage.clear()
  }

}
