import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post = [];


  constructor( private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://locahost:5000/post').subscribe(
      (post: any[]) => this.post = post 
    );

  }

}
