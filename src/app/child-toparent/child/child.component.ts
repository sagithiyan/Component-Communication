import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public message = 'Hi from child';  

  @Output() messageSendEvent = new EventEmitter<string>();

  sendmessage(){
    this.messageSendEvent.emit(this.message);
  }

  constructor() { }

  ngOnInit(): void {

  }

}
