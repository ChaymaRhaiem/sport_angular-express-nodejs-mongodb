import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
tabs:any=[];
title:String;
actualDate: Date; 

  constructor() { }

  ngOnInit(): void {
    this.title="bonjour admin";
    this.actualDate= new Date();

}
}