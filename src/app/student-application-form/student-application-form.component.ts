import { Component, OnInit } from '@angular/core';
import { StudentApplicationDTO, AddressDTO } from '../StudentApplicationDTO';
import {StudentApplicationServiceService} from '../student-application-service.service'
import{Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-student-application-form',
  templateUrl: './student-application-form.component.html',
  styleUrls: ['./student-application-form.component.css']
})
export class StudentApplicationFormComponent implements OnInit {

	  

  student:StudentApplicationDTO = {
                      
                      firstName:'',
                      lastName:'',
                      pob:'',
                      dob:'',
                      idNumber:'',
                      homeLanguage:'',
                      citizenship:'',
                      previousSchool:'',
                      reasonForLeaving:'',
                      pastResults:'',
                      
                      address:{    
                                                  
                                 streetName:'',
                                 houseNumber:'',
                                 town:'',
                                 city:'',
                                 province:'',
                                 zipCode:''
                           }
                      }
  
  address:AddressDTO = new AddressDTO()
  message:any;

  uploadedFiles: Array<File>
  constructor(private studentApplicationServiceService:StudentApplicationServiceService, private router:Router) { }

  ngOnInit() {
  }
  newStudentApplicationDTO():void{
   
    this.student = new StudentApplicationDTO()
    this.address = new AddressDTO()
    }

    /****
     * save student app data
     
     */ 
     saveStudentApp(){
       this.studentApplicationServiceService.saveStudentApplication(this.student)
            .subscribe(data=> this.message = data, error=>console.error());
    
     }

}
