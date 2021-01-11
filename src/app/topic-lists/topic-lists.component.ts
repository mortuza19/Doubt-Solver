import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasicService } from '../shared/basic.service';
import { TopicModel } from '../shared/data-model';

@Component({
  selector: 'app-topic-lists',
  templateUrl: './topic-lists.component.html',
  styleUrls: ['./topic-lists.component.css']
})
export class TopicListsComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private basicService: BasicService
  ) { }

  categorySubscription: Subscription;
  topicSubscription: Subscription;
  searchSubscription: Subscription;

  topicListStorage: TopicModel[] = [];
  topicLists: TopicModel[] = [];
  categorySelection: string;

  ngOnInit() {
    this.basicService.getTopicList()
    .subscribe((data: any) => {
      this.topicLists = data.data.slice();
      this.topicListStorage = [...this.topicLists];
    },
    error => {
      this.basicService.openSnackBar('Error in loading the topics');
    }
    );
  }

  ngAfterViewInit() {
    this.categorySubscription = this.basicService.tagSelected.subscribe(data => {
      if (data && data !== 'All') {
        this.categorySelection = data;
        this.topicLists = this.topicListStorage.filter(topic => topic.categoryId === data);
      } else {
        this.categorySelection = '';
        this.topicLists = [...this.topicListStorage];
      }
    });

    this.topicSubscription = this.basicService.newTopic.subscribe(data => {
      this.topicListStorage.unshift(data);
      if (!this.categorySelection) {
        this.topicLists.unshift(data);
      } else {
        if (this.categorySelection === data.categoryId) {
          this.topicLists.unshift(data);
        }
      }
    });

    this.searchSubscription = this.basicService.searchText.subscribe(searchString => {
      if (searchString) {
        this.topicLists = this.topicListStorage.filter(data => data.subject === searchString);
      } else {
        this.topicLists = [...this.topicListStorage];
      }
    })
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
    this.topicSubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
  }

}
