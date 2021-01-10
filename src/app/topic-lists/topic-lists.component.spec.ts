import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicListsComponent } from './topic-lists.component';

describe('TopicListsComponent', () => {
  let component: TopicListsComponent;
  let fixture: ComponentFixture<TopicListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
