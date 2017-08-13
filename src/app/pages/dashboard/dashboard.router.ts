import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];

export const DashboardRouter: ModuleWithProviders = RouterModule.forChild(routes);
