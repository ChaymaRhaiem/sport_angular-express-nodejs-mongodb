import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResultComponent } from './components/result/result.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { NewsComponent } from './components/news/news.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArtcileComponent } from './components/artcile/artcile.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { AdminTabsComponent } from './components/admin-tabs/admin-tabs.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AdminTeamsComponent } from './components/admin-teams/admin-teams.component';
import { AdminPlayersComponent } from './components/admin-players/admin-players.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { EspacePipe } from './pipes/espace.pipe';
import { AsterixPipe } from './pipes/asterix.pipe';
import{HttpClientModule} from  "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResultComponent,
    CupEventComponent,
    NewsComponent,
    MatchInfoComponent,
    BlogComponent,
    InfoComponent,
    ArtcileComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminComponent,
    AdminTabsComponent,
    MatchesComponent,
    PlayersComponent,
    TeamsComponent,
    AdminTeamsComponent,
    AdminPlayersComponent,
    AddTeamComponent,
    AddPlayerComponent,
    DisplayMatchComponent,
    AddMatchComponent,
    ReversePipe,
    EspacePipe,
    AsterixPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
