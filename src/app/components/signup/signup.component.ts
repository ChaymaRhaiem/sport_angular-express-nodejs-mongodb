import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { mustMatch } from 'src/app/validators/mustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  id: any;
  user: any = {};
  signupForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) { }
  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.maxLength(8)]],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.minLength(5)]],
      confirmPwd: ['']
    },
      {
        validators: mustMatch('pwd', 'confirmPwd')
      }
    );
  }

  signup() {
    this.userService.signUp(this.signupForm.value).subscribe();
  }
  

}