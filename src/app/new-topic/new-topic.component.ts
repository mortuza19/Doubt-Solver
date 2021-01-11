import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BasicService } from '../shared/basic.service';
import { TopicModel } from '../shared/data-model';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent implements OnInit {

  subject: string;
  content: string;
  category: string;

  categoryList: string[] = [];
  constructor(
    private basicService: BasicService,
    public dialogRef: MatDialogRef<NewTopicComponent>
  ) { }

  ngOnInit() {
    this.categoryList = this.basicService.tagList;
  }

  addNewTopic() {
    let newTopic: TopicModel = {
      id: Math.floor(Math.random() * 10000000).toString(),
      subject: this.subject,
        content: this.content,
        creator: {
            id: sessionStorage.getItem('userId'),
            name: sessionStorage.getItem('userName'),
            photoUrl: null,
            type: 'ENDUSER',
            label: null
        },
      latestCommenter: null,
      status: "PUBLISHED",
      label: "NOSTATUS",
      permalink: this.subject.split(' ').join('-'),
      type: "DISCUSSION",
      createdTime: new Date().toISOString(),
      latestCommentTime: null,
      commentCount: "0",
      likeCount: "0",
      isVoted: false,
      categoryId: this.category,
      lastCommenter: null
    }
    this.basicService.newTopic.next(newTopic);
    this.closePopup();
  }

  closePopup() {
    this.dialogRef.close();
  }

}
