import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AdminPlayersComponent } from './components/admin-players/admin-players.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'admin' , component:AdminComponent},
  {path:'add-player', component: AddPlayerComponent},
  {path:'add-team' , component: AddTeamComponent},
  {path:'match/:id' ,component:DisplayMatchComponent} ,
  {path:'add-match' , component: AddMatchComponent},
  {path:'editMatch/:id' , component:AddMatchComponent},
  {path:'delete/:id' , component:AddMatchComponent},
  {path:'player/:id' , component:AdminPlayersComponent},
  {path:'editPlayer/:id' , component:AddPlayerComponent},
  {path:'team/:id' , component:AddTeamComponent},
  {path:'editTeam/:id' , component:AddTeamComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
