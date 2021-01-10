import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BasicService } from 'src/app/shared/basic.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  @ViewChild('companyLogo', {static: false, read: ElementRef}) companyLogo: ElementRef;
  @ViewChild('accountInfo', {static: false, read: ElementRef}) accountInfo: ElementRef;
  @ViewChild('greetingsInfo', {static: false, read: ElementRef}) greetingsInfo: ElementRef;
  @ViewChild('button', {static: false, read: ElementRef}) button: ElementRef;
  @ViewChild('custombg', {static: false, read: ElementRef}) custombg: ElementRef;
  constructor(
    private basicService: BasicService
  ) { }

  name = 'Sign up';
  buttonName  = 'Sign up';
  accountMessage = 'Don\'t have an account?';
  greetings = 'Fill in some basic info so that we get to know you';

  ngOnInit() {
  }

  changeToSignIn() {
    this.companyLogo.nativeElement.classList.add('left-shake');
    if (this.buttonName.toLowerCase() === 'sign up') {
      this.accountInfo.nativeElement.classList.add('right-shake');
      this.greetingsInfo.nativeElement.classList.add('right-shake');
      this.button.nativeElement.classList.add('right-shake');
      this.name = 'Sign in';
      setTimeout(() => {
        this.buttonName = 'Sign in';
        this.accountMessage = 'Already Have an account?';
        this.greetings = 'Welcome back! We\'ve missed you';
        this.companyLogo.nativeElement.classList.remove('left-shake');
        this.accountInfo.nativeElement.classList.remove('right-shake');
        this.greetingsInfo.nativeElement.classList.remove('right-shake');
        this.custombg.nativeElement.classList.remove('left-flip');
        this.custombg.nativeElement.classList.add('right-flip');
        this.button.nativeElement.classList.remove('right-shake');
      }, 500);
    } else {
      this.name = 'Sign up';
      this.accountInfo.nativeElement.classList.add('left-shake');
      this.greetingsInfo.nativeElement.classList.add('left-shake');
      this.button.nativeElement.classList.add('left-shake');
      setTimeout(() => {
        this.buttonName = 'Sign up';
        this.accountMessage = 'Don\'t have an account?';
        this.greetings = 'Fill in some basic info so that we get to know you';
        this.name = '';
        this.companyLogo.nativeElement.classList.remove('left-shake');
        this.accountInfo.nativeElement.classList.remove('left-shake');
        this.greetingsInfo.nativeElement.classList.remove('left-shake');
        this.custombg.nativeElement.classList.remove('right-flip');
        this.custombg.nativeElement.classList.add('left-flip');
      }, 500);
    }
    this.basicService.positionChange.next(this.name);
  }

}
