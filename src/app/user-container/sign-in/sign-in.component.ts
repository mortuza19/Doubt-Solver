import { Component, OnInit } from '@angular/core';
import { BasicService } from 'src/app/shared/basic.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  buttonName = 'Sign In';

  userName: string;
  pwd: string;
  userEmail: string;
  constructor(
    private basicService: BasicService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.basicService.positionChange.subscribe(data => {
      setTimeout(() => {
        if (data.toLowerCase() === 'sign in') {
          this.buttonName = 'Sign Up';
        } else {
          this.buttonName = 'Sign In';
        }
      }, 500);
    });
  }

  signin() {
    if (this.buttonName === 'Sign In') {
      this.userService.getUser({username: this.userName, pwd: this.pwd});
      this.userName = this.pwd = '';
    } else {
      this.userService.setUser({username: this.userName, pwd: this.pwd, useremail: this.userName});
    }
  }

}
