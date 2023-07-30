import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService:RecipeService,private _activatedRoute:ActivatedRoute, private _route:Router) { }

  ngOnInit() {
    this.recipes=this.recipeService._getRecipe();
    console.log(this.recipes)
  }
  newRecipe(){
    this._route.navigate(['new'],{relativeTo:this._activatedRoute})
  }

}
