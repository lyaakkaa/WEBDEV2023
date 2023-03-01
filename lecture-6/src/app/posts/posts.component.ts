import { Component } from '@angular/core';
import { POSTS } from '../fake-db';
import { Post } from '../models';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Post[];
  loaded: boolean;
  newPost: Post;

  constructor(private postService:PostService){
    this.posts = [];
    this.loaded = true;
    this.newPost = {} as Post;
  }

  ngOnInit(): void{
    // this.posts = POSTS;
    this.getPosts();
    
  }

  getPosts(){
    this.loaded = false;
    this.postService.getPosts().subscribe((posts) =>{
      this.posts = posts;
      this.loaded = true;
    });
  }

  addPost(){
    // console.log(this.newPost);
    this.postService.addPost(this.newPost).subscribe((post:Post)=>{

    });
  }

}
