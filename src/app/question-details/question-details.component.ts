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

  newComment: string;
  replyList: string[];

  questionDetail: any;
  ngOnInit() {
    this.loginUser = sessionStorage.getItem('userName');
    this.basicService.getQuestionDetail().subscribe((data: any) => {
      this.questionDetail = data;
      console.log(this.questionDetail);
      this.replyList = Array(this.questionDetail.comments.length).fill('');
    },
    error => {
      this.basicService.openSnackBar('Error loading threads!');
    })
  }

  get date() {
    return new Date();
  }

  addComment() {
    const newComment = {
      attachment: [],
      content: this.newComment,
      createdTime: new Date().toISOString(),
      creator: {
        id: sessionStorage.getItem('userId'),
        label: null,
        name: sessionStorage.getItem('userName'),
        photoUrl: null,
        type: "ENDUSER"
      },
      id: Math.floor(Math.random()*500000).toString(),
      modifiedTime: null,
      replies: [],
      status: "PUBLISHED"
    };
    this.questionDetail.comments.push(newComment);
    this.newComment = '';
  }

  addReply(index: number) {
    this.questionDetail.comments[index].replies.push({
      content: this.replyList[index],
      createdTime: new Date().toISOString(),
      creator: {
        id: sessionStorage.getItem('userId'),
        label: null,
        name: sessionStorage.getItem('userName'),
        photoUrl: null,
        type: "ENDUSER"
      },
    });
    this.questionDetail.comments[index].replies = this.questionDetail.comments[index].replies.slice();
    this.replyList[index] = '';
    console.log(this.questionDetail);
  }

}
