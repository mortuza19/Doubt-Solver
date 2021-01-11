import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { SignInComponent } from './user-container/sign-in/sign-in.component';
import { IntroComponent } from './user-container/intro/intro.component';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatSelectModule, MatSnackBarModule } from '@angular/material';
import { TaglistComponent } from './general-layout/taglist/taglist.component';
import { SearchBarComponent } from './general-layout/search-bar/search-bar.component';
import { TopicListsComponent } from './topic-lists/topic-lists.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { NewTopicComponent } from './new-topic/new-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    SignInComponent,
    IntroComponent,
    GeneralLayoutComponent,
    TaglistComponent,
    SearchBarComponent,
    TopicListsComponent,
    QuestionDetailsComponent,
    NewTopicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewTopicComponent]
})
export class AppModule { }
