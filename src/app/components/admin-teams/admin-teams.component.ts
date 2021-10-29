import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.css']
})
export class AdminTeamsComponent implements OnInit {
  constructor( private router:Router,private teamService:TeamService) { }
teams:any;
  ngOnInit(): void {
 

  /*  this.teamService.getAllTeams().subscribe(
      (data)=> {
        this.teams = data.teams;
      }
    );*/
  this.teams=JSON.parse(localStorage.getItem('teams'));
  }
  goTodisplay(id: number) {
    this.router.navigate([`team/${id}`]);
  }

  goToEdit(id: number) {
    this.router.navigate([`editTeam/${id}`]);
  }

  delete(pos: number) {
this.teams.splice(pos,1) ;
localStorage.setItem('teams',JSON.stringify(this.teams));

}
}

