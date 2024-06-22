import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'; //para la parte de donde se pone el list todo eso
import {MatIconModule} from '@angular/material/icon'; // donde es la casita para ir a inicio
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule, NgIf } from '@angular/common';
import { LoginService } from './services/login.service';
import { EmployeeComponent } from './components/employee/employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListComponent } from './components/list/list.component';
import { ModifyComponent } from './components/modify/modify.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SettingComponent } from './components/setting/setting.component';
import { ReportComponent } from './components/report/report.component';
import { EmployeeTypeComponent } from './components/employee-type/employee-type.component';
import { MachineryComponent } from './components/machinery/machinery.component';
import { MachineryTypeComponent } from './components/machinery-type/machinery-type.component';
import { LoginComponent } from './components/login/login.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { MineComponent } from './components/mine/mine.component';
import { MineralComponent } from './components/mineral/mineral.component';
import { MineralTypeComponent } from './components/mineral-type/mineral-type.component';
import { NotificationTypeComponent } from './components/notification-type/notification-type.component';
import { Router } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
//import { BodyComponent } from './components/body/body.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
//import { BodyComponent } from './components/body/body.component';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    NgIf,
    CommonModule,
    SidebarComponent,
    CuerpoComponent,

    //parte del sidenav
    DashboardComponent,
    ListComponent,
    ModifyComponent,
    NotificationComponent,
    SettingComponent,
    ReportComponent,

    //parte del las entidades
    EmployeeComponent,
    EmployeeTypeComponent,
    MachineryComponent,
    MachineryTypeComponent,
    LoginComponent,
    MaintenanceComponent,
    MineComponent,
    MineralComponent,
    MineralTypeComponent,
    NotificationTypeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'mineria';
  showSiderbar = signal(true);

  role: string = '';

  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor(private loginService: LoginService, private router: Router) {
    if (this.verificar()) {
      this.router.navigate(['/dashboard']);
    }
  }
 
  cerrar() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }


  verificar() {
    this.role = this.loginService.showRole();
    return this.loginService.verificar();
  }
  isEmpleado() {
    return this.role === 'EMPLEADO';
  }


  isJefe() {
    return this.role === 'JEFE';
  }

  toggleSidebar() {
    this.showSiderbar.set(!this.showSiderbar());
  }
  
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

 
}
