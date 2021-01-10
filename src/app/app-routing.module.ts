import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { AuthGuard } from './shared/auth.guard';
import { TopicListsComponent } from './topic-lists/topic-lists.component';
import { UserContainerComponent } from './user-container/user-container.component';


const routes: Routes = [
  {path: 'signin', component:UserContainerComponent},
  {path: 'home', component:GeneralLayoutComponent, canActivate: [AuthGuard], children:[
    {path: 'topics', component:TopicListsComponent, canActivate: [AuthGuard]},
    {path: 'topic/:id', component:QuestionDetailsComponent, canActivate: [AuthGuard]},
    {path:'', redirectTo:'topics', pathMatch: 'full'}
  ]},
  {path: '', redirectTo:'home', pathMatch:'full', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
