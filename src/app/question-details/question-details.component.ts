import { Component, OnInit } from '@angular/core';
import { BasicService } from '../shared/basic.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  constructor(private basicService: BasicService) { }

  loginUser: string;

  questionDetail: any;
  ngOnInit() {
    this.loginUser = sessionStorage.getItem('userName');
    this.basicService.getQuestionDetail().subscribe((data: any) => {
      this.questionDetail = data;
      console.log(this.questionDetail);
    },
    error => {
      this.basicService.openSnackBar('Error loading threads!');
    })
  }

  get date() {
    return new Date();
  }

}
