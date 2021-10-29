import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  addMatchForm: FormGroup;
  match: any = {};

  imagePreview:string;
  id: any;
  // img:File;
  title:String;
  findedMatch: any;
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private matchService:MatchService,private router:Router) { }


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
//      this.match = this.searchMatch(this.id);
  
        this.matchService.getMatchById(this.id).subscribe(
          (data) =>{
            this.match =data.match;
          }
        );
    this.title='edit' ;

    }
    else {
this.title= 'add' ;   }




    this.addMatchForm = this.formBuilder.group({
      scoreOne: [''],
      scoreTwo: [''],
      teamOne: [''],
      teamTwo: [''],
      img: ['']
    });
  }


 

  addMatch() {
    console.log(this.match);
    //let id = JSON.parse(localStorage.getItem('matchId')  '1');
    //let matches = JSON.parse(localStorage.getItem('matches')  '[]');
    //this.match.id = id;
    //matches.push(this.match);
    //localStorage.setItem('matches', JSON.stringify(matches));
    //localStorage.setItem('matchId', id+1);
    if(this.id){
      this.matchService.editMatch(this.match).subscribe();
      this.router.navigate(['admin']);
    }else {
      this.matchService.addMatch(this.match,this.addMatchForm.value.img).subscribe();
    }
  }

  searchMatch(id) {
    let findedMatch;
    let matches = JSON.parse(localStorage.getItem('matches') || '[]');
    for (let i = 0; i < matches.length; i++) {
      if (matches[i].id == id) {
        findedMatch = matches[i];
        break;



      }
    }
    return findedMatch;
  }

  deleteMatch(id){
    let matches = JSON.parse(localStorage.getItem('matches') || '[]');
    this.match.id = id;
    matches.splice(this.match,id);
  
  }


onImageSelected(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.addMatchForm.patchValue({ img: file });

  this.addMatchForm.updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
  this.imagePreview = reader.result as string
  };
  reader.readAsDataURL(file);
  }
}