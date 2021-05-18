import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

// import { AnyARecord } from 'dns';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accno = "Account number please";
  pswd = "";
  

  constructor(private router: Router,private dataService:DataService) { }

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
    let accno = this.accno;
    let pswd = this.pswd;
    const result = this.dataService.login(accno,pswd);
    if(result) {
      alert("login success")
      this.router.navigateByUrl("dashboard")         //navigating to dashboard page
    }
    
    
 }
 register() {
   this.router.navigateByUrl("register")                //dependency injection
 }
}
