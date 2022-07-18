import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit ,AfterViewInit{

  message!:string;
  messageView !:string;
  @ViewChild(ChildComponent) child: any;

  reciveMessage(message:string){
    this.message = message;
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.messageView = this.child.messageViewchild;
    console.log('message',this.messageView);
    this.cdr.detectChanges();

  }

  ngOnInit(): void {
  }

}
