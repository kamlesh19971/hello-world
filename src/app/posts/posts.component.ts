import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: any[] = [];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response => {
        console.log(response.json());
        this.posts = response.json();
      });
  }


  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = "";

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {

        console.log(response.json());
        post.id = response.json().id;
        this.posts.splice(0, 0, post);
      });
  }

  updatePost(post: any) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      // this.http.put(this.url, post)
      .subscribe(response => {
        console.log(response.json());
      });
  }
}
