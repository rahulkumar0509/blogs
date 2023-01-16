import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodArticleComponent } from './blog-themes/food/food-article/food-article.component';
import { FoodHomepageComponent } from './blog-themes/food/food-homepage/food-homepage.component';
import { PersonalityArticleComponent } from './blog-themes/personality/personality-article/personality-article.component';
import { PersonalityHomepageComponent } from './blog-themes/personality/personality-homepage/personality-homepage.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { FormBlogComponent } from './form-blog/form-blog.component';

const routes: Routes = [
  {
    path: 'blogs', component: BlogsListComponent
  },
  {
    path: 'blogs/write', component: FormBlogComponent
  },
  {
    path: 'blogs/food', component: FoodHomepageComponent
  },
  {
    path: 'blogs/food/article', component: FoodArticleComponent
  },
  {
    path: 'blogs/personality', component: PersonalityHomepageComponent
  },
  {
    path: 'blogs/personality/article', component: PersonalityArticleComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'blogs'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
