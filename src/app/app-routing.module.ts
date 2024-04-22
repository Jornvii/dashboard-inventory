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
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // Default route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


