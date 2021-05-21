import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // currentUser = this.dataService.currentUser;

  depositForm = this.fb.group({
    dAccno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    dPswd: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    dAmount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  withdrawForm = this.fb.group({
    wAccno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    wPswd: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    wAmount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  constructor(private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  deposit() {
    if (this.depositForm.valid) {
      var accno = this.depositForm.value.dAccno;
      var pswd = this.depositForm.value.dPswd;
      var amount = this.depositForm.value.dAmount;
      const result = this.dataService.deposit(accno,pswd,amount);//calling the deposit() in dataservice by passing all inputs
      if (result) {     //result is true
        alert("Your account has been credited with Rs" + amount + " and available balance is Rs" + result)
      }
    }
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
      const result = this.dataService.withdraw(accno,pswd,amount);
      if (result) {
        alert("Your account is debicted with Rs" + amount + " and available balance is Rs" + result)
      }

    }
    else {
      alert("Form invalid")
    }

  }
}
