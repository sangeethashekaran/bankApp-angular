import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {
@Input() item:string|null|undefined;      //parent to child
@Output() onDelete = new EventEmitter;    //child to parent
@Output() onCancel = new EventEmitter; 
  constructor() { }

  ngOnInit(): void {
  }

  delete(){
     this.onDelete.emit(this.item);             //to parent
  }

  cancel(){
    alert("Cancelling...")
     this.onCancel.emit();
  }

}
