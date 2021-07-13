import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

// import { AnyARecord } from 'dns';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  loginForm = this.fb.group({
    acno:['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
  })
  

  constructor(private router: Router,private dataService:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // accnoChange(event:any) {
  // this.accno = event.target.value;
  // console.log(this.accno);
  // 
  // }

  // pwdChange(event:any){
  // this.pwd = event.target.value;
  // console.log(this.pwd);


  login() {
    if(this.loginForm.valid) {
    let acno = this.loginForm.value.acno;
    let pswd = this.loginForm.value.pswd;
    this.dataService.login(acno,pswd)    //asychronus
    .subscribe((result:any)=>{
      if(result) {         // if result is true
        alert(result.message);
        localStorage.setItem("name",result.name)
        localStorage.setItem("acno",result.acno)  //cuurent user's acno storing in local storage
        this.router.navigateByUrl("dashboard");
      }
    },
    (result)=>{
      alert(result.error.message) // if result false
    })
  }
 else {
   alert("form is invalid")
 }
}
 register() {
   this.router.navigateByUrl("register")                //dependency injection
 }
}
