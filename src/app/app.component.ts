import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,FormArray } from "@angular/forms";
import { FormBuilder } from "@angular/forms";

import { EnrollmentService } from "./enrollment.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private formBuilder:FormBuilder,private es:EnrollmentService){}

register:any=this.formBuilder.group({
  username:['',Validators.required],
  phone:['',Validators.required],
  email:['',[Validators.required,Validators.email]],

    address1:['',Validators.required],
    address2:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    postalCode:['',Validators.required]
  
})


get email(){
  return this.register.get('email');
}
get phone(){
  return this.register.get('phone'); 
}
get username(){
  return this.register.get('username');
}

  /*onClick(){
    this.register.patchValue({
      userName:'pranita',
      email:'pranita@gmail.com'
      
    })
  }*/


  /*onSubmit(){
    console.log(this.register.value);
    this.es.enroll(this.register.value).subscribe((res)=>{
      console.log(res);
   
    })

  }*/

  onSubmit(){
    console.log(this.register.value);
    this.es.enroll(this.register.value).subscribe(
      //console.log(res);
      data=>{
        console.log(`saved sucessfully..${JSON.stringify(data)}`);
      },
      error=>{console.log(error)}
   );

  }

 
}
