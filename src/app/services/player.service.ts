import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerUrl : string ='http://localhost:3000/players' ;
  constructor(private httpClient:HttpClient) { }


addPlayer(player:any){
  return this.httpClient.post(this.playerUrl,player);

}

editPlayer(player:any){
  return this.httpClient.put(`${this.playerUrl}/{player.id}`,player);

}

getAllPlayers(){
  return this.httpClient.get(this.playerUrl); 

}

getPlayerById(id:any){
  return this.httpClient.get(`${this.playerUrl}/${id}`);

}

deletePlayer (id:any){
  return this.httpClient.delete(`${this.playerUrl}/${id}`);
}
}
