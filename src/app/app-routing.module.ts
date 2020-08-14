import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './layout/container/container.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [

  {
    path: '',
    component: ContainerComponent,
    // children: [
    //   {
    //     path:'Home',
    //     redirectTo: ''
    //   },
    //   {
    //     path: '',
    //     component: HomeComponent,
    //     children: [
    //       {
    //         path: '',
    //         component: VideoContainerComponent
    //       },
    //       {
    //         path: 'Articles',
    //         component: ArticleContainerComponent,
    //       }
    //     ]
    //   },
    //   {
    //     path: 'About',
    //     component: AboutComponent,
    //   },
    //   {
    //     path: 'Library',
    //     component: LibraryComponent,
    //     children: [
    //       {
    //         path: '',
    //         redirectTo: 'Videos',
    //         pathMatch: 'full'
    //       },
    //       {
    //         path: 'Videos',
    //         component: VideoContainerComponent,
    //       },
    //       {
    //         path: 'Articles',
    //         component: ArticleContainerComponent,
    //       }
    //     ]
    //   },
    //   {
    //     path: 'News',
    //     component: NewsComponent,
    //   },
    //   {
    //     path: 'Cart',
    //     component: CartComponent,
    //   },
    //   {
    //     path: 'OrderSummary/:id',
    //     component: SummaryComponent,
    //     canActivate: [AuthGuard]
    //   },
    //   {
    //     path: 'Checkout',
    //     component: CheckoutComponent,
    //     canActivate: [AuthGuard],
    //   },
    //   {
    //     path: 'Shop',
    //     children: [
    //       {
    //         path: '',
    //         component: ShopCategoryComponent
    //       },
    //       {
    //         path: 'Category',
    //         redirectTo: '',
    //       },
    //       {
    //         path: 'Category/:Category',
    //         component: ShopComponent
    //       },
    //       {
    //         path: 'Detail',
    //         redirectTo: '',
    //       },
    //       {
    //         path: 'Detail/:Detail',
    //         component: ShopItemDetailComponent
    //       },
    //     ]
    //   },
    //   {
    //     path: 'Gallery',
    //     component: GalleryComponent,
    //   },
    //   {
    //     path: 'Register',
    //     children: [
    //       { path: '', component: RegisterComponent, data: { animation: 'Register' } },
    //       { path: 'PlanForm', component: PlanFormComponent, data: { animation: 'PlanForm' } },
    //       { path: 'Registration', component: RegistrationComponent, data: { animation: 'Registration' } },
    //       { path: 'RegForm', component: RegFormComponent, data: { animation: 'RegForm' } },
    //       { path: 'Payment', component: PaymentComponent, data: { animation: 'Payment' } },
    //       { path: 'CreditOption', component: CreditOptionComponent, data: { animation: 'CreditOption' } },
    //     ]
    //   },
    //   {
    //     path: 'Dashboard',
    //     component: DashboardComponent,
    //     canActivate: [AuthGuard]
    //   },
    //   {
    //     path: 'VerifyEmail',
    //     component: VerifyEmailComponent
    //   },
    //   {
    //     path: 'ResetPassword',
    //     component: ResetPasswordComponent
    //   },
    //   {
    //     path: '',
    //     component: HomeComponent,
    //   },
    // ]
  },
  // {
  //   path: 'Welcome',
  //   component: ContainerComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: WelcomeComponent,
  //     },
  //   ]
  // },
  {
    path: '**',
    component: NotFoundComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
