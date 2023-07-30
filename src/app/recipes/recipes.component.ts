import { Subscription } from 'rxjs';
import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit,OnDestroy {

  private myMainSubscription:Subscription

  myRecipe:Recipe

  constructor(private _recipeService:RecipeService ) { }

  ngOnInit() {
    this.myMainSubscription=this._recipeService.recipeSelected.subscribe(
    (res:Recipe)=>{
      this.myRecipe=res;
    })
  }

  ngOnDestroy(): void {
    this.myMainSubscription.unsubscribe()
  }

}
