import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { IPost } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  users$!: Observable<IPost[]>;

  constructor(private postService:PostsService) { }

  ngOnInit(): void {
    this.getposts();
  }

  getposts(){
    console.log('hee')
    this.postService.getPosts().pipe(take(1)).subscribe(res=>{
      console.log(res,'res');
      this.users$ = res;
    })
  }
}
