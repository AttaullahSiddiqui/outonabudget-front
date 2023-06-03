import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { StoresComponent } from './stores/stores.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BlogComponent } from './blog/blog.component';
import { StoreComponent } from './store/store.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthService] },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthService],
  },
  {
    path: 'category/:id',
    component: CategoryComponent,
    canActivate: [AuthService],
  },
  // {
  //   path: 'services',
  //   component: ServicesComponent,
  //   canActivate: [AuthService],
  // },
  {
    path: 'stores',
    component: StoresComponent,
    canActivate: [AuthService],
  },
  {
    path: 'store/:id',
    component: StoreComponent,
    canActivate: [AuthService],
  },
  { path: 'blogs', component: BlogsComponent, canActivate: [AuthService] },
  { path: 'blog/:id', component: BlogComponent, canActivate: [AuthService] },
  { path: 'about', component: AboutComponent, canActivate: [AuthService] },
  { path: 'privacy', component: PrivacyComponent, canActivate: [AuthService] },
  {
    path: 'termsandconditions',
    component: TermsandconditionComponent,
    canActivate: [AuthService],
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
