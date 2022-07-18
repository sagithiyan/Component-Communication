import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  /* using output emitter */

  public message = 'Hi from child';  

  @Output() messageSendEvent = new EventEmitter<string>();

  sendmessage(){
    this.messageSendEvent.emit(this.message);
  }

  /* using view child - no  changes required on child component  */
  public messageViewchild = 'Hi from view child...!';
  

  constructor() { }

  ngOnInit(): void {

  }

}
