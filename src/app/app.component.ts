import { Component } from '@angular/core';
import { Post } from './models/post';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';
  posts: Array<Post> = [];
  constructor(private post: PostService ){
     post.getAllPosts().then(res => {this.posts = res; console.log(this.posts)});
  }


}
