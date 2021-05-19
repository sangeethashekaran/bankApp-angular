import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
dAccno = "";
dPswd = "";
dAmount = "";

wAccno="";
wPswd="";
wAmount="";
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
 
  deposit() {
    var accno=this.dAccno;
    var pswd=this.dPswd;
    var amt=this.dAmount;
    const result = this.dataService.deposit(accno,pswd,amt);
    if(result) {
      alert("Your account has been deposited with" + amt+ "and avilable balance is" + result )
    }
  }
  withdraw() {
    var accno= this.wAccno;
    var pswd=this.wPswd;
    var amount=this.wAmount;
    const result=this.dataService.withdraw(accno,pswd,amount);
    if(result) {
      alert("Your account is debicted with" + amount + "and available balance is" + result)
    }

  }

}
