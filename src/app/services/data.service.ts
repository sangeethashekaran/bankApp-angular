import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   currentUser="";                //name of current user

  accountDetails: any = {
    1000: { acno: 1000, actype: "savings", username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, actype: "savings", username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, actype: "current", username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, actype: "current", username: "userfour", password: "userfour", balance: 6000 }
  }
  
  constructor() {
    this.getDetails();                  //In a class,constructor method will be run firstly
  }

  saveDetails() {                                 //database  and currentuser storing in local storage
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails));
    if(this.currentUser) {            
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser));
    }
  }

  getDetails() {
    if(localStorage.getItem("accountDetails")) {
    this.accountDetails=JSON.parse(localStorage.getItem("accountDetails"));
    }

    if(localStorage.getItem("currentUser")) {       //if currentUser is presnt in localstorage
    this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
    }
  }

  
  
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
        this.saveDetails();            //calling function
        return true;
        
    }
  }

  login(accno:any,pswd:any) {
    let users = this.accountDetails;
    if(accno in users){
       if(pswd==users[accno]["password"]) {
         this.currentUser=users[accno]["username"]; //accesing current username
         this.saveDetails();                          //calling saveDetails function
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
        this.saveDetails();
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
          this.saveDetails();
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


function J(arg0: string, J: any) {
  throw new Error('Function not implemented.');
}

