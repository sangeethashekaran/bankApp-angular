import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  accountDetails: any = {
    1000: { acno: 1000, actype: "savings", username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, actype: "savings", username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, actype: "current", username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, actype: "current", username: "userfour", password: "userfour", balance: 6000 }
  }
  
  constructor() {
  }

  // saveDetails() {
    // localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
    // localStorage.setItem("this.currentUser",JSON.stringify(this.currentUser))
  // }
  // getDetails() {
    // JSON.parse(localStorage.getItem("accountDetails"));
    // JSON.parse(localStorage.)
  // }
  
  register(uname:any,acno:any,pswd:any) {
    let user = this.accountDetails; //database
    if(acno in user) {
    return false;
    }
    else {              //pushin to database
      user[acno]={
        acno,
        username: uname,
        password:pswd,
        balance: 0
      }
        return true;
        
    }
  }

  login(accno:any,pswd:any) {
    let users = this.accountDetails;
    if(accno in users){
       if(pswd==users[accno]["password"]) {
        //  this.currentUser=users[accno]["username"]
         return true;
         }
       else {
         alert("incorrect password")
         return false;
       }
    }
    else {
      alert("invalid account")
      return false;
    }
  }

  deposit(accno:any,pswd:any,amt:any) {
    var amount = parseInt(amt);
    let user = this.accountDetails;
    if(accno in user) {
      if(pswd==user[accno]["password"]) {
        user[accno]["balance"]+=amount;
        return user[accno]["balance"];
      }
      else {
        alert("Incorrect password");
        return false;
      }
    }
    else {
      alert("invalid account");
      return false;
    }
  }

  withdraw(accno:any,pswd:any,amt:any) {
    var amount=parseInt(amt);
    console.log(accno,pswd);
    
    let users=this.accountDetails;
    console.log(users[accno]["password"]);
    
    if(accno in users) {
      if(pswd==users[accno]["password"]) {
        if(users[accno]["balance"]>amount) {
          users[accno]["balance"]-=amount;
          return users[accno]["balance"];
        }
        else {
          alert("Insufficient balance");
          return false;
        }
    }
    else{
    alert("incorrect password");
    return false;
    }
  }
  else {
    alert("Invalid account");
    return false;
  }

  }



  }


