import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/setting/setting.component';
import { ReportComponent } from './components/report/report.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ModifyComponent } from './components/modify/modify.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './components/employee/list-employee/list-employee.component';


export const routes: Routes = [


  {path: '',redirectTo: 'login',pathMatch: 'full'},
  {path: 'login',component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add', component: AddComponent },
  { path: 'list',
    component: ListComponent,
     children: [
    { 
      path: 'employees', 
      component: ListEmployeeComponent
    },]
 
  },
  { path: 'reports', component: ReportComponent },
  { path: 'notification', component: NotificationComponent }, // Añadida nueva ruta
  { path: 'settings', component: SettingComponent },


  { path: '**', redirectTo: 'login' }


];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
