import { Component, OnInit, Input } from '@angular/core';
import { Employees } from '../../employee/employees.model';
import { CrudService } from '../../Services/crud.service';
import { Router } from '@angular/router';
import { Employee } from '../../employee/employees';
import { UpdateModule } from '../../employee/update.model';


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

  // Profile picture
  public photoUrl = '';
  public showInitials = true;
  public bgColor:string = '';
  public selectedID: any
  public divColor:string = '';
  public initials: string = '';
  public circleColor: string[] = ['#367E18','#790252','#645CAA','#AF0171','#645CAA','#A460ED',
                                  '#42855B','#FF4A4A','#A62349','#FFB200','#781C68','#D61C4E','#FF87B2'];
  


  // employeeDetail: UpdateModule =  new UpdateModule
  employees: any;
  // tutorials?: Tutorial[];
  currentTutorial: Employees = {};
  currentIndex = -1;
  id = '';
  searchText: any;
  searchResult: any;
  p: number = 1;
  collection: any[] = []; 

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  viewCard(employeID: any){
    console.log(employeID, "Hello");
    
    alert("Hi")
    this.router.navigateByUrl(`/view/${employeID}`);
    // this.router.navigate([`/view/${employeID}`])
    alert("Done")
  }
  
  retrieveEmployees(): void {
    this.crudService.getAll().subscribe({
        next: (data) => {
          this.employees = data;
           console.log(data);
           console.log(this.employees[0]._id);
           this.selectedID = this.employees[0]._id
           console.log(this.employees);
           this.collection = this.employees;
          for(let j = 0; j < this.employees.length; j++){
            this.divColor = this.color(this.employees[j].fullname);
          }
           

           if(this.employees.image){
             this.showInitials = false
            //  this.photoUrl = this.employees[index].image
           }else{
            this.showInitials = true
          }
    

           
        },
        error: (e) => console.error(e)
      });
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


  deleteEmployee(emplyId: Employee): void {

    this.crudService.delete(emplyId)
      .subscribe({
        next: (res) => {
          console.log(res);
          window.location.reload();
        },
        error: (e) => console.error(e)
      });
  }

  editEmployee(employeeDetail: UpdateModule){
    // this.employeeDetail = {...employeeDetail}
    this.router.navigate(['/edit']);
  }
  edit(item:any)
  {

 localStorage.setItem('employee_id',item._id)
  this.router.navigate(['/edit'])

  }

  search(value: string): void {
    this.searchResult = this.employees.filter((val:any) =>
      val.name.toLowerCase().includes(value)
    );
  }


}
