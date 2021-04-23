import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path:'post',redirectTo:'post/index',pathMatch:'full'},
  {path:'index',component:IndexComponent},
  {path:'post/:postId/view',component:ViewComponent},
  {path:'post/:postId/edit',component:EditComponent},
  {path:'create',component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
