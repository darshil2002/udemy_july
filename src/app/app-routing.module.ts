import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDefaultComponent } from './recipes/recipe-default/recipe-default.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes:Routes =[
  {path:'', redirectTo:'/recipes', pathMatch:'full'},
  {path:'recipes', component: RecipesComponent,
  children:[
    {path:'', component:RecipeDefaultComponent,},
    {path:'new', component:RecipeEditComponent,},
    {path:':id',component:RecipeDetailComponent},
    {path:':id/edit',component:RecipeEditComponent},
  ]},
  {path:'shopping-list', component: ShoppingListComponent},
  {
    path:'**', component:RecipesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
