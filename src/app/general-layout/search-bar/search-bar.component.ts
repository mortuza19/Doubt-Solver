import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { BasicService } from 'src/app/shared/basic.service';
import { TopicModel } from 'src/app/shared/data-model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  control = new FormControl();
  subject: string[] = [];
  filteredSubject: Observable<string[]>;
  topicLists: TopicModel[] = [];
  constructor(private basicService: BasicService){}

  ngOnInit() {
    this.basicService.getTopicList()
    .subscribe((data: any) => {
      this.topicLists = data.data.slice();
      this.subject = this.topicLists.map(topic => topic.subject);
      this.filteredSubject = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
  }

  optionSelected(option: MatAutocompleteSelectedEvent) {
    this.basicService.searchText.next(option.option.value);
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.subject.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
