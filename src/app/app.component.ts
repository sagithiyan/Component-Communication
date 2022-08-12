import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'componetCom';

  constructor() {
    const test$ = new Observable((sub) => {
      console.log('test');
      sub.next(1);
      sub.next(2);
      sub.error('sss');
      sub.next(3);
      sub.complete()
    });

    test$.subscribe({
      next(x){
        console.log(x)
      },
      error(){
        console.log('www');
      },
      complete(){
        console.log('done');
      }
    }


    );
  }
}
