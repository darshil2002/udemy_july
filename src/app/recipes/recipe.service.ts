import { ShopingListService } from './../shopping-list/shoping-list.service';
import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected=new EventEmitter<Recipe>();

  constructor(private _shopingListService:ShopingListService) { }

  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
     'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('tomato',2),
      new Ingredient('potato',2)],
      ),

    new Recipe('A another Recipe',
      'hakuna matata',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('pumpkin',5)
      ,new Ingredient('onion',33)],)

  ];

  _getRecipe(){
    return this.recipes.slice();
  }
  addIngredientToShopinglistService(data:Ingredient[]){
    // for(let i=0;i<data.length;i++){
    //    this._shopingListService.addIng(data[i])
    // }
    // this will also work :)
    this._shopingListService.addIngArray(data)
  }


}
