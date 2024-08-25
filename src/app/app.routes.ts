import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
    {path: 'resume', component: ResumeComponent, title: 'Resume'},
    {path: 'landing', component: LandingComponent, title: 'Landing'},
    {path: '', redirectTo: '/landing', pathMatch: 'full'}
];
