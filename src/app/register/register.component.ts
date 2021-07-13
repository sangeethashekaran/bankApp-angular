import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname = "";
  acno = "";
  pswd = "";


  registerForm = this.fb.group({   //creating form group
    uname: ['', [Validators.required, Validators.pattern('[a-zA-z]*')]],      //key: string
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {}
  
  register() {

    
    if(this.registerForm.valid) {       //checking wther registerForm is valid
      var uname = this.registerForm.value.uname; //for fetching inputs from regstr form
      var acno = this.registerForm.value.acno;
      var pswd = this.registerForm.value.pswd;
      console.log(uname, acno, pswd);

      this.dataService.register(uname,acno,pswd) //asychronus action
      .subscribe((result:any)=>{
        if(result) {         // if result is true or acno not in db
          alert(result.message);
          this.router.navigateByUrl("");
        }
      },
      (result)=>{
        alert(result.error.message) // if result false
      })
    }
    else {
      alert("Form invalid");
    }
  }

}

