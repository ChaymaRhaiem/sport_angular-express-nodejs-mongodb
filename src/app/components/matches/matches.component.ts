import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: any;
  constructor(private router: Router, private matchService: MatchService) { }

  ngOnInit() {


    //this.matches=JSON.parse(localStorage.getItem('matches'));
    this.matchService.getAllMatches().subscribe(
      (data) => {
        this.matches = data.matches;
      }
    );
  }
  goTodisplay(id: number) {
    this.router.navigate([`match/${id}`]);
  }

  goToEdit(id: number) {
    this.router.navigate([`editMatch/${id}`]);
  }

  delete(id: number) {
    /*this.matches.splice(pos,1) ;
    localStorage.setItem('matches',JSON.stringify(this.matches));*/
    this.matchService.deleteMatch(id).subscribe(
      (data) => { 
        console.log('data from BE', data.message);

        this.matchService.getAllMatches().subscribe( //refresh using getAllMatches().subscribe
          (data) => {
            this.matches = data.matches;
          }

        );
      }
    );
  }



  compare(scoreOne: any, scoreTwo: any) {
    if (scoreOne > scoreTwo) {
      return ['win', 'green']
    }
    else if (scoreOne < scoreTwo) {
      return ['loss', 'red']
    }
    else {
      return ['draw', 'blue']
    }
  }

}
