import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from './request/request.component';
import { AdminComponent } from './admin/admin.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ListRequestComponent } from './list-request/list-request.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReturnComponent } from './return/return.component';
import { HistoryComponent } from './history/history.component';
import { IssueComponent } from './issue/issue.component';




const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard', component: RequestComponent },
  { path: 'request', component: RequestComponent },
  { path: 'list-request', component: ListRequestComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'calculate', component: CalculateComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent },
  {path:'login', component: LoginComponent},
  {path:'homepage', component: HomepageComponent},
  {path:'return', component: ReturnComponent},
  {path:'history', component: HistoryComponent},
  {path:'issue', component: IssueComponent},


  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // Default route
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // Default route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


