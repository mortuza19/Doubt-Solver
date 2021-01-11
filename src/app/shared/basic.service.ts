import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { TopicModel } from './data-model';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  positionChange  = new Subject<string>();
  tagList : string[] = [
    'All',
    'Architecture',
    'Authentication',
    'Blade',
    'Cache',
    'Configuration',
    'Database',
    'Dusk',
    'Eloquent',
    'Envoyer',
    'Forge',
    'Forms',
    'Homestead',
    'Input',
    'Installation',
    'IOC'
  ];

  tagSelected: Subject<string> = new Subject<string>();
  newTopic: Subject<TopicModel> = new Subject<TopicModel>();

  topicList: TopicModel[] = [];
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  getTopicList() {
    return this.http.get('./assets/json/topics.json');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'End now', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
