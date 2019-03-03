import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators  } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailId : string ;
  password : string ;
  loginForm : FormGroup;
  successMessage : string ;
  errorMessage : string ;
  constructor( private fb : FormBuilder , private loginService : LoginService ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailId : [null , Validators.compose([Validators.required , Validators.email])],
      password : [null , Validators.required]
    })
  }

  login(){
    this.loginService.login(this.loginForm.value)
    .then(console.log("Done"))
    .catch(console.log("Not Dome"));
  }


}
