import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  depositForm = this.fb.group({
    dAccno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    dPswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    dAmount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  withdrawForm = this.fb.group({
    wAccno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    wPswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    wAmount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  user: any;             //current username
  acno:any;
  lDate:Date=new Date;   //for displying login date
  constructor(private dataService: DataService, private fb: FormBuilder,private router:Router) {
    this.user = localStorage.getItem("name")
  }

  ngOnInit(): void {
  }

  deposit() {
    if (this.depositForm.valid) {
      var accno = this.depositForm.value.dAccno;
      var pswd = this.depositForm.value.dPswd;
      var amount = this.depositForm.value.dAmount;
      this.dataService.deposit(accno, pswd, amount)//calling the deposit() in dataservice by passing all inputs
        .subscribe((result: any) => {
          if (result) {
            alert(result.message);
          }
        },
          (result) => {                            //handling 400 rang respnse
            alert(result.error.message)
          })
    }
    // if (result) {     //result is true
    //   alert("Your account has been credited with Rs" + amount + " and available balance is Rs" + result)
    // }
    else {
      alert("Form invalid")
    }
  }
  withdraw() {
    if (this.withdrawForm.valid) {
      var accno = this.withdrawForm.value.wAccno;
      var pswd = this.withdrawForm.value.wPswd;
      console.log(accno, pswd);

      var amount = this.withdrawForm.value.wAmount;
      this.dataService.withdraw(accno, pswd, amount) //asycnhronus
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
          }
        },
        (result)=>{
          alert(result.error.message);
          console.log(result.error.message);
        })

    }
    else {
      alert("Form invalid")
    }

  }
  deleteAcc(){                                   //main delete button function
    this.acno=localStorage.getItem("acno");
  }

  onDelete(event:any){
     this.dataService.deleteAccDetails(event)
     .subscribe((result:any)=>{
       if(result){
         alert(result.message);
         this.router.navigateByUrl("");
         
       }
      },
       (result:any)=>{
         alert(result.error.message)
       })
     }

    onCancel(){
      this.acno="";

    }
}
