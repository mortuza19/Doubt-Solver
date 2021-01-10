import { Component, OnInit } from '@angular/core';
import { BasicService } from 'src/app/shared/basic.service';

@Component({
  selector: 'app-taglist',
  templateUrl: './taglist.component.html',
  styleUrls: ['./taglist.component.css']
})
export class TaglistComponent implements OnInit {

  constructor(private basicService: BasicService) { }

  tagList: string[] = [];
  ngOnInit() {
    this.tagList = this.basicService.tagList;
  }

}
