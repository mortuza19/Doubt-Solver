import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTopicComponent } from 'src/app/new-topic/new-topic.component';
import { BasicService } from 'src/app/shared/basic.service';

@Component({
  selector: 'app-taglist',
  templateUrl: './taglist.component.html',
  styleUrls: ['./taglist.component.css']
})
export class TaglistComponent implements OnInit {

  constructor(private basicService: BasicService, public dialog: MatDialog) { }

  tagList: any[] = [];
  ngOnInit() {
    this.basicService.tagList.forEach(tag => {
      this.tagList.push(
        {tagName: tag, selected: 0}
      );
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

}
