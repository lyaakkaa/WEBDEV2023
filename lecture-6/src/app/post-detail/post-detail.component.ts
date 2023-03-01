import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POSTS } from '../fake-db';
import { Post } from '../models';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {

  post: Post;
  loaded: boolean;

  constructor(private route: ActivatedRoute,
    private postService: PostService) {
    this.post = {} as Post;
    this.loaded = true;
  }

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // console.log(id);
    this.loaded = false;
    // this.post = POSTS.find((post : Post) => post.id === id) as Post;
    this.postService.getPost(id).subscribe((post: Post)=>{
      this.post = post;
      this.loaded = true;
    });


    

  }

}
