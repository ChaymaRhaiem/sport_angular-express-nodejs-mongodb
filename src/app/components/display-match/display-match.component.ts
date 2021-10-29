import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  id: any;
  matches: any;
  findedMatches: any;
  constructor(private activatedRoute: ActivatedRoute, private matchService: MatchService) {




  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id'); //variable positionnels
    /*this.matches =JSON.parse(localStorage.getItem('matches')|| '[]');
    for(let i=0 ; i<this.matches.length; i++){
      if (this.matches[i].id == this.id) {
        this.findedMatches =this.matches[i];
        break;
      }
  }*/
    this.matchService.getMatchById(this.id).subscribe(
      (data) => {
        this.findedMatches = data.match;
      }
    );
  }
}

