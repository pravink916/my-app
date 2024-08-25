import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { LandingComponent } from './landing/landing.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    {path: 'resume', component: ResumeComponent, title: 'Resume'},
    {path: 'landing', component: LandingComponent, title: 'Landing'},
    {path: 'portfolio', component: PortfolioComponent, title: 'Portfolio'},
    {path: '', redirectTo: '/landing', pathMatch: 'full'}
];
