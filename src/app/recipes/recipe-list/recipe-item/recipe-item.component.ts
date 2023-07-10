import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  @Output() selectedRecipe= new EventEmitter <void> ();

  constructor() { }

  ngOnInit() {
  }

  recipeSelected(){
    this.selectedRecipe.emit()
    // here nothing is passed in emit we just wanted to tell that i am clicked
    // and because upar for loop no use thay che tya thi khabar padi j jay ke su click thayu so no need to use catch method in the html :) 
  }

}
