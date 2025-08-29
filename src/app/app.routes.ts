import { Routes } from '@angular/router';
import { routes } from './constants/routes';
import { LandingComponent } from './pages/home/landing/landing.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ProfileComponent } from './pages/profile//profile/profile.component';
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
      },
      {
        path: routes.login,
        loadComponent: () =>
          import('./pages/login/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: routes.register,
        loadComponent: () =>
          import('./pages/register/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
      {
        path: `${routes.product}/:id`,
        loadComponent: () =>
          import('./pages/product/view-detail/view-detail.component').then(
            (m) => m.ViewDetailComponent
          ),
      },
      {
        path: routes.profile,
        component: ProfileComponent,
        children: [
          {
            path: '',
            redirectTo: routes.accountInfo,
            pathMatch: 'full',
          },
          {
            path: routes.accountInfo,
            loadComponent: () =>
              import('./pages/profile/account-info/account-info.component').then(
                (m) => m.AccountInfoComponent
              ),
          },
          {
            path: routes.orders,
            loadComponent: () =>
              import('./pages/profile/my-orders/my-orders.component').then(
                (m) => m.MyOrdersComponent
              ),
          },
          {
            path: routes.changePassword,
            loadComponent: () =>
              import('./pages/profile/change-password/change-password.component').then(
                (m) => m.ChangePasswordComponent
              ),
          },
          {
            path: routes.savedAddress,
            loadComponent: () =>
              import('./pages/profile/saved-address/saved-address.component').then(
                (m) => m.SavedAddressComponent
              ),
          },
        ]
      },
      {
        path: routes.cart,
        loadComponent: () =>
          import('./pages/profile/cart/cart.component').then(
            (m) => m.CartComponent
          ),
      },
    ]
  },
];
