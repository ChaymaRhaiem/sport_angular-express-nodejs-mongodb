import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addTeamForm : FormGroup;
  team : any = [];
  id: any;
  title:String;
  findedTeam:any;
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private teamService : TeamService) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.team = this.searchTeam(this.id);
      this.title='edit' ;

    }
    else {
this.title= 'add' ;   }

    this.addTeamForm = this.formBuilder.group ({
      name : [''],
      foundation:[''],
      stadium:[''],
      owner:[''],

    });
  }
  addTeam() {
   /* let id = JSON.parse(localStorage.getItem('teamId') || '1');
    let teams = JSON.parse(localStorage.getItem('teams') || '[]');
    this.team.id = id;
    teams.push(this.team);
    localStorage.setItem('teams', JSON.stringify(teams));
  localStorage.setItem('teamId', id + 1); */
  console.log("team  info : ", this.team);
  this.teamService.addTeam(this.team).subscribe();  
}


searchTeam(id) {
  let findedTeam;
  let teams = JSON.parse(localStorage.getItem('teams') || '[]');
  for (let i = 0; i < teams.length; i++) {
    if (teams[i].id == id) {
      findedTeam = teams[i];
      break;



    }
  }
  return findedTeam;
}

deleteTeam(id){
  let teams = JSON.parse(localStorage.getItem('teams') || '[]');
  this.team.id = id;
  teams.splice(this.team,id);

}


}
