import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  myRecipe:Recipe
  constructor(private _recipeService:RecipeService ) { }

  ngOnInit() {
    this._recipeService.recipeSelected.subscribe(
    (res:Recipe)=>{
      this.myRecipe=res;
    })

  }
}
