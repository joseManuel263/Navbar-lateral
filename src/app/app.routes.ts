import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { DatabaseComponent } from './database/database.component';
import { ReportsComponent } from './reports/reports.component';
import { CloudstorageComponent } from './cloudstorage/cloudstorage.component';
import { SecurityComponent } from './security/security.component';
import { ExtencionsComponent } from './extencions/extencions.component';
import { NavbarlateralComponent } from './navbarlateral/navbarlateral.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'database', component: DatabaseComponent },
    { path: 'cloud-storage', component: CloudstorageComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'security', component: SecurityComponent },
    { path: 'extensions', component: ExtencionsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'navbarlateral', component: NavbarlateralComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];
