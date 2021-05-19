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
  constructor() { }
  
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
    var users = this.accountDetails;
    if(accno in users) {
      if(pswd=users[accno]["password"]) {
        users[accno]["balance"]+=amount;
        return users[accno]["balance"];
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
    var users=this.accountDetails;
    if(accno in users) {
      if(pswd=users[accno]["password"]) {
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
    alert("incorrect password")
    }
  }
  else {
    alert("Invalid account")
  }

  }



  }


