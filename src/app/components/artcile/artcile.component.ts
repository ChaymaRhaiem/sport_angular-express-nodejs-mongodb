import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './artcile.component.html',
  styleUrls: ['./artcile.component.css']
})
export class ArtcileComponent implements OnInit {

  @Input() articleInput:any;
  constructor() { }

  ngOnInit() {
  }

}
