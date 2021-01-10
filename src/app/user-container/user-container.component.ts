import { Component, OnInit } from '@angular/core';
import { BasicService } from '../shared/basic.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  isSignUp = true;

  constructor(
    private basicService: BasicService
  ) {}

  ngOnInit() {
    this.basicService.positionChange.subscribe(data => {
      if (data.toLowerCase() === 'sign in') {
        this.isSignUp = false;
      } else {
        this.isSignUp = true;
      }
    });
  }

}
