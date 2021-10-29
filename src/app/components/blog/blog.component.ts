import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles:any;
  constructor() { }

  ngOnInit() {
    this.articles = [
      {id:1, content: 'Hello 1'},
      {id:2, content: 'Hello 2'},
      {id:3, content: 'Hello 3'}
    ]
  }

}
