import { Component, OnInit } from '@angular/core';
// import { AnyARecord } from 'dns';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accno = "Account number please";
  pswd = " ";
  accountDetails:any = {
    1000: { acno: 1000, actype: "savings", username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, actype: "savings", username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, actype: "current", username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, actype: "current", username: "userfour", password: "userfour", balance: 6000 }
}

  constructor() { }

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
        let paswd = this.pswd;
        let users = this.accountDetails;
        if (accno in users) {
            if(paswd == users[accno]["password"]) {
              alert("Login succesful")

            }
            else {
              alert("incoorect password");
            }
          }
        else {
          alert("invalid account")
        }

}
}
