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
  // Profile picture
  collection: any[] = [];
  public photoUrl = '';
  public showInitials = true;
  public bgColor:string = '';
  public selectedID: any
  public divColor:string = '';
  public initials: string = '';
  public circleColor: string[] = ['#367E18','#790252','#645CAA','#AF0171','#645CAA','#A460ED',
                                  '#42855B','#FF4A4A','#A62349','#FFB200','#781C68','#D61C4E','#FF87B2'];

  editForm = new FormGroup({
    fullname: new FormControl(''),
    jobtitle: new FormControl(''),
    email: new FormControl(''),
    phonenumber: new FormControl(''),
    department: new FormControl(''),
    profilepic: new FormControl('')
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
       
       

    
       
         console.log(this.userUpdate.fullname);
         
          this.divColor = this.color(this.userUpdate.fullname);
            console.log(this.divColor);
            
        

          console.log(this.userInfo);
          console.log(this.userInfo);
          
          
           

           if(this.userInfo.image){
             this.showInitials = false
            //  this.photoUrl = this.employees[index].image
           }else{
            this.showInitials = true
          }
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
      profilepic: this.userUpdate.profilepic
    }
    console.log(user);
    
    this.crudService.update(user, id).subscribe({
     next:data =>{
      this.router.navigate(['/dash'])
     }
    })
  }

  clear(){
    localStorage.clear()
  }

  color(fname:string ){
    console.log(fname)
    fname = fname[0].toUpperCase();
    


      if(fname.match(/[A-C]/i)){
        this.circleColor[0]
        this.bgColor = this.circleColor[0]
      }else if(fname.match(/[D-F]/i)){
       
        this.bgColor = this.circleColor[1]
      }else if(fname.match(/[G-I]/i)){
        this.circleColor[2]
        this.bgColor = this.circleColor[2]
      }else if(fname.match(/[J-L]/i)){
        this.circleColor[3]
        this.bgColor = this.circleColor[3]
      }else if(fname.match(/[M-O]/i)){
        this.circleColor[4]
        this.bgColor = this.circleColor[4]
      }else if(fname.match(/[P-R]/i)){
        this.circleColor[5]
        this.bgColor = this.circleColor[5]
      }else if(fname.match(/[S-U]/i)){
        this.circleColor[6]
        this.bgColor = this.circleColor[6]
      }else if(fname.match(/[V-X]/i)){
        this.circleColor[7]
        this.bgColor = this.circleColor[7]
      }else if(fname.match(/[YZ]/i)){
        this.circleColor[8]
        this.bgColor = this.circleColor[8]
      }else{
        this.circleColor[-1]
        this.bgColor = this.circleColor[-1]
      }
      return this.bgColor
  }

}
