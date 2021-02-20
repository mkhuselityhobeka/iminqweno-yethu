import{ UserRegistrationDTO } from '../StudendRegistration';
import{ StudentRegistrationService } from '../student-registration.service';
import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { FormsModule,ReactiveFormsModule,FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-student-registration',
  templateUrl: './create-student-registration.component.html',
  styleUrls: ['./create-student-registration.component.css']
})

export class CreateStudentRegistrationComponent implements OnInit {

  /*****
   * 
   * StudentRegistation instance
   */

     studentRegistration:UserRegistrationDTO = new UserRegistrationDTO();
     submitted = false;
     message:any;
     registrationForm: FormGroup;
     //constructor injection , injecting the StudentRegistrationService and the Router using the contructor
  constructor(private studentRegistrationService:StudentRegistrationService, private  router:Router) {}

 
  ngOnInit() {
    this.userRegistrationValidation();
  }

  newStudentRegistation():void{
       this.submitted = false;
       this.studentRegistration = new UserRegistrationDTO();
  }

  save(){
    this.studentRegistrationService.createStudentRegistration(this.studentRegistration).
             subscribe(data => this.message =data,error => console.log(error));
            // this.studentRegistration = new StudentRegistation();
   
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  

  /**
 * goToRegPage url
 */
goToRegPage () {

  this.router.navigateByUrl('/registration').then(nav =>{
        console.log(nav);
     },err => {
       console.log(err);
     });
   }



   userRegistrationValidation():void{
      this.registrationForm = new FormGroup({
        'sname': new FormControl(this.studentRegistration.sname,[
            Validators.required,
            
        ]),
       
      });
   }

   get name(){

    return this.registrationForm.get('sname')
   }
}


