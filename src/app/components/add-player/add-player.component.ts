import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  addPlayerForm : FormGroup;
  title : string ;
  player:any={};
  id : any;
  constructor(
    private formBuilder: FormBuilder, 
    private activatedRoute : ActivatedRoute,
    private playerService : PlayerService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id){
      this.title="Edit Player";
      this.player = this.searchPlayer(this.id);
    }else {
      this.title="Add Player";
    } 

    this.addPlayerForm= this.formBuilder.group (
      {
        name : [""],
        nbr : [""],
        post : [""],
        age : [""]
      }
      ); 
  }

  addPlayer() {
    //let id = JSON.parse(localStorage.getItem('playerId')  '1');
    //let players = JSON.parse(localStorage.getItem('players')  '[]');
    //this.player.id = id;
    //players.push(this.player);
    //localStorage.setItem('players', JSON.stringify(players));
    //localStorage.setItem('playerId', id+1);
    console.log(this.player);
    this.playerService.addPlayer(this.player).subscribe();
  }

  searchPlayer(id : any){
    let findedPlayer;
    let players=JSON.parse(localStorage.getItem('players') || '[]');
    for (let i =0; i<players.length; i++){
      if(players[i].id == id) {
        findedPlayer = players[i];
        break;
      }
    }
    return findedPlayer;
  }

}