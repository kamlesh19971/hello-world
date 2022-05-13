import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];

  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }


  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.posts.splice(0, 0, post);
    input.value = "";

    this.service.create(post)
      .subscribe((newPost: any) => {
        post.id = newPost.id;
      }, (error: AppError) => {
        this.posts.splice(0, 1);
        console.log(error);
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
        } else throw error;

      });
  }

  updatePost(post: any) {
    // this.http.put(this.url, post)
    this.service.update({ isRead: true })
      .subscribe(updatedPost => {
        console.log(updatedPost);
      });
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(345)
      .subscribe(null, (error: AppError) => {
        console.log(error);

        setTimeout(() => {

          this.posts.splice(index, 0, post);
        }, 3000);
        if (error instanceof NotFoundError) {
          alert("This post has already been deleted")
        } else throw error;

      });
  }
}
