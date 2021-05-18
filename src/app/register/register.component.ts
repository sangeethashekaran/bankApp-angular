import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname = "";
  acno= "";
  pswd="";

  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
  }
 register() {
   var uname = this.uname;
   var acno = this.acno;
   var pswd = this.pswd;
   const result = this.dataService.register(uname,acno,pswd);

   if(result) {         // if result is true or acno not in db
    alert("Succesfully Registered..");
    this.router.navigateByUrl("");
   }
   else {
    alert("User already exist...Please login") // if result false
   }
   }
 }

