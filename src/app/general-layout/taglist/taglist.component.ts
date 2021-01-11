import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { NewTopicComponent } from 'src/app/new-topic/new-topic.component';
import { BasicService } from 'src/app/shared/basic.service';

@Component({
  selector: 'app-taglist',
  templateUrl: './taglist.component.html',
  styleUrls: ['./taglist.component.css']
})
export class TaglistComponent implements OnInit, OnDestroy {

  constructor(private basicService: BasicService, public dialog: MatDialog) { }

  searchTextSubscription: Subscription;
  tagList: any[] = [];
  ngOnInit() {
    this.basicService.tagList.forEach(tag => {
      this.tagList.push(
        {tagName: tag, selected: 0}
      );
    });
    this.searchTextSubscription = this.basicService.searchText.subscribe(data => {
      this.tagList.forEach(tag => {
        tag.selected = 0;
      });
    })
  }

  tagChosen(tag: any) {
    tag.selected = tag.selected ? 0 : 1;
    this.tagList.forEach(tags => {
      if (tags.tagName !== tag.tagName) {
        tags.selected = 0;
      }
    });
    if (tag.selected) {
      this.basicService.tagSelected.next(tag.tagName);
    } else {
      this.basicService.tagSelected.next('');
    }
  }

  createNewTopic() {
    this.dialog.open(NewTopicComponent);
  }

  ngOnDestroy() {
    this.searchTextSubscription.unsubscribe();
  }

}
