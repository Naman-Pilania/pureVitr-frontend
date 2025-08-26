import { Routes } from '@angular/router';
import { routes } from './constants/routes';
import { LandingComponent } from './pages/home/landing/landing.component';
import { HomeComponent } from './pages/home/home/home.component';
export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: routes.home,
    pathMatch: 'full',
  },
  {
    path: routes.home,
    component: LandingComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: routes.questions,
        loadComponent: () =>
          import('./pages/questionnaire/questionnaire/questionnaire.component').then(
            (m) => m.QuestionnaireComponent
          ),
      }
    ]
  }
];
