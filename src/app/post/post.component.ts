import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }
  @Input() post: Post ={
    userId: 0,
    id: 0,
    title: "",
    body: ""
    };
  ngOnInit(): void {
  }

}
