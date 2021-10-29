import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
matchUrl : string ='http://localhost:3000/matches' ;
  constructor(private httpClient:HttpClient) { }

addMatch(match:any, img : File){
 
  let formData = new FormData;
  formData.append('teamOne',match.teamOne);
  formData.append('teamTwo',match.teamTwo);
  formData.append('scoreOne',match.scoreOne);
  formData.append('scoreTwo',match.scoreTwo);
  formData.append('img',img);

  return this.httpClient.post(this.matchUrl,formData);

}

editMatch(match:any){
  return this.httpClient.put<{message:string}>(`${this.matchUrl}/{match._id}`,match);

}

getAllMatches(){
  return this.httpClient.get<{matches:any}> (this.matchUrl); 

}

getMatchById(id:any){
  console.log('service id', id);
  
  return this.httpClient.get<{match:any}>(`${this.matchUrl}/${id}`); //response type 

}

deleteMatch (id:any){
  return this.httpClient.delete<{message:string}>(`${this.matchUrl}/${id}`); //return value : <{message:string}>
}

}
