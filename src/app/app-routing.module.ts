import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthGuard } from './user/auth.guard';
import { DashboardComponent } from './material/components/dashboard/dashboard.component';
import { KanbanModule } from './kanban/kanban.module';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard]},
  {    path: 'kanban',
  loadChildren: () =>
    import('./kanban/kanban.module').then(m => m.KanbanModule),
  canActivate: [AuthGuard]},
{
  path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
