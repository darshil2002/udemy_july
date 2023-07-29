import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe:Recipe;
  id:number;

  constructor(private _recipeService:RecipeService,
              private _activatedRoute:ActivatedRoute,
              private _route:Router) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe((params:Params)=>{
      this.id=+params['id']
      this.recipe=this._recipeService.getSelectedRecipe(this.id)
    })
  }

  addToShoppingList(){
    this._recipeService.addIngredientToShopinglistService(this.recipe.ingredient)
  }

  editRecipe(){
    this._route.navigate(['edit'], {relativeTo:this._activatedRoute})
  }
}
