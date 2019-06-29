import { Component, OnInit } from '@angular/core';
import { LABELS } from './../../language';
import { LoginService } from '../login.service';
import * as M from 'materialize-css/dist/js/materialize';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  
  signInForm: boolean = true;
  labels: any = LABELS.pt;

  user: any = {
    name: "",
    email: "",
    password: ""
  }
  
  signIn() {
    this.loginService.signIn(this.user)
      .subscribe(response => {
        console.log(response)
        this.loginService.setUser(response)
        this.router.navigate(['/bookcase']);
      }, error =>   {
        console.log(error)
        if(error.error.code == 40) {
          M.toast({html: this.labels.userNotFound});
        }      
      });
  }

  signUp() {
    this.loginService.signUp(this.user)
      .subscribe(response => {
        console.log(response)
        M.toast({html: this.labels.userSuccessfullyCreated})
        
        this.user = {
          name: "",
          email: this.user.email,
          password: ""
        }

        this.signInForm = true

      }, error =>   {
        console.log(error)
        if(error.error.code == 10) {
          M.toast({html: this.labels.errorExistentUser});
        }
      })
  }

  setSignInForm() {
    this.signInForm = true
  }

  setSignUpForm() {
    this.signInForm = false
  }

}
