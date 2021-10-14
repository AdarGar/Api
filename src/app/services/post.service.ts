import { Injectable } from '@angular/core';
import axios from 'axios';
import { Post } from '../models/post';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { 

  }
  getAllPosts():Promise<Post[]>{
   return axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts").then( response => response.data)
  }
  
}
