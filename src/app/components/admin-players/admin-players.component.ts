import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styleUrls: ['./admin-players.component.css']
})
export class AdminPlayersComponent implements OnInit {
players:any;
  constructor(private router: Router,private playerService:PlayerService) { }

    ngOnInit(): void {
/*
      this.playerService.getAllPlayers().subscribe(
        (data)=> {
          this.players = data.players;
        }
      ); */ }


  goTodisplay(id: number) {
    this.router.navigate([`player/${id}`]);
  }
  goToEdit(id: number) {
    this.router.navigate([`editPlayer/${id}`]);
  }

  delete(pos: number) {
    this.players.splice(pos,1) ;
    localStorage.setItem('players',JSON.stringify(this.players));
    
    }
  }

