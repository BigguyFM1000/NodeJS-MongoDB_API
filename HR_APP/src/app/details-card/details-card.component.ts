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
  test:any

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

    this.test = this.color("fhatuwani");
    console.log(this.test);
    
  }

  getById(userId:number){
    console.log(userId);
    
    return this.crudService.get(userId).subscribe({
      next:data =>{
       this.userUpdate = data
       console.log(this.userUpdate);
    
       
      

       

       console.log(this.userUpdate);
           
          // for(let j = 0; j < this.userInfo.length; j++){
          //   this.divColor = this.color(this.userInfo.fullname);
            
          // }
        console.log(this.userUpdate.fullname);
        
          this.divColor = this.color(this.userUpdate.fullname);

          console.log(this.divColor);
          console.log(this.userInfo);
          
          
           

           if(this.userInfo.image){
             this.showInitials = false
            //  this.photoUrl = this.employees[index].image
           }else{
            this.showInitials = true
          }

       
      //  console.log(this.userInfo)
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
