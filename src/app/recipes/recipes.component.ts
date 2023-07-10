import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  myRecipe:Recipe
  constructor() { }

  ngOnInit() {
    // console.log(this.recipe.description)
  }

  // myRecipeFunction(myData:Recipe){
  //   this.myRecipe=myData
  // }
}
