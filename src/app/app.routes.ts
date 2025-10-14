import { Routes } from '@angular/router';
import DashboardComponent from './gifs/pages/dashboard-page/dashboard-page.component';
import { SettingsComponent } from './gifs/components/settings/settings.component';
import { DatabaseComponent } from './gifs/components/database/database.component';
import { ReportsComponent } from './gifs/components/reports/reports.component';
import { CloudstorageComponent } from './gifs/components/cloudstorage/cloudstorage.component';
import { SecurityComponent } from './gifs/components/security/security.component';
import { ExtencionsComponent } from './gifs/components/extencions/extencions.component';
import { NavbarlateralComponent } from './gifs/pages/navbarlateral/navbarlateral.component';
import { SearchPageComponent } from './gifs/pages/search-page/search-page.component';
import { TrendingPageComponent } from './gifs/pages/trending-page/trending-page.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'database', component: DatabaseComponent },
    { path: 'cloud-storage', component: CloudstorageComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'security', component: SecurityComponent },
    { path: 'extensions', component: ExtencionsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'navbarlateral', component: NavbarlateralComponent },
    { path: 'search', component: SearchPageComponent },
    { path: 'trending', component: TrendingPageComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];
