import { Component, OnInit } from '@angular/core';
import { BasicService } from '../shared/basic.service';
import { TopicModel } from '../shared/data-model';

@Component({
  selector: 'app-topic-lists',
  templateUrl: './topic-lists.component.html',
  styleUrls: ['./topic-lists.component.css']
})
export class TopicListsComponent implements OnInit {

  constructor(
    private basicService: BasicService
  ) { }

  topicLists: TopicModel[] = [];
  ngOnInit() {
    this.basicService.getTopicList()
    .subscribe((data: any) => {
      this.topicLists = data.data.slice();
    },
    error => {
      this.basicService.openSnackBar('Error in loading the topics');
    }
    )
  }

}
