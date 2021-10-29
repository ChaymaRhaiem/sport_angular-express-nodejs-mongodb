import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  id:any;
  teams :any;
  findedTeams:any;
  constructor(private activatedRoute:ActivatedRoute) { }
  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.teams =JSON.parse(localStorage.getItem('teams')|| '[]');
    for(let i=0 ; i<this.teams.length; i++){
      if (this.teams[i].id == this.id) {
        this.findedTeams =this.teams[i];
        break;
      }
  }
  console.log('finded match',this.findedTeams);
  }
  }


