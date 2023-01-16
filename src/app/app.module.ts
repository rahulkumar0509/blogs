import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBlogComponent } from './form-blog/form-blog.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { TextareaComponent } from './components/form-controls/textarea/textarea.component';
import { InputComponent } from './components/form-controls/input/input.component';
import { UploadBoxComponent } from './components/form-controls/upload-box/upload-box.component';
import { MultipleControlComponent } from './components/form-controls/multiple-control/multiple-control.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { HeaderSimpleComponent } from './website-possible-headers/header-simple/header-simple.component';
import { FoodArticleComponent } from './blog-themes/food/food-article/food-article.component';
import { FoodHomepageComponent } from './blog-themes/food/food-homepage/food-homepage.component';
import { PersonalityArticleComponent } from './blog-themes/personality/personality-article/personality-article.component';
import { PersonalityHomepageComponent } from './blog-themes/personality/personality-homepage/personality-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBlogComponent,
    DynamicFormComponent,
    TextareaComponent,
    InputComponent,
    UploadBoxComponent,
    MultipleControlComponent,
    BlogsListComponent,
    HeaderSimpleComponent,
    FoodArticleComponent,
    FoodHomepageComponent,
    PersonalityArticleComponent,
    PersonalityHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
