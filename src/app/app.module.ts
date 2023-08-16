import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { SortbyPipe } from './sortby.pipe';
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriesComponent } from './categories/categories.component';
import { StoresComponent } from './stores/stores.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { StoreComponent } from './store/store.component';
import { CategoryblogComponent } from './categoryblog/categoryblog.component';
import { MediaComponent } from './media/media.component';
import { NewsComponent } from './news/news.component';
import { AllnewsComponent } from './allnews/allnews.component';
import { NewsbycategoryComponent } from './newsbycategory/newsbycategory.component';
import { SinglenewsComponent } from './singlenews/singlenews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SanitizeHtmlPipe,
    SortbyPipe,
    CategoriesComponent,
    StoresComponent,
    BlogsComponent,
    AboutComponent,
    PrivacyComponent,
    TermsandconditionComponent,
    BlogComponent,
    CategoryComponent,
    StoreComponent,
    CategoryblogComponent,
    MediaComponent,
    NewsComponent,
    AllnewsComponent,
    NewsbycategoryComponent,
    SinglenewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
