import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShopingListService {

  newIngrediantList=new Subject<Ingredient[]>();

  constructor() { }
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  _getIngredients(){
    return this.ingredients.slice();
  }

  addIng(myData:Ingredient){
    this.ingredients.push(myData);
    this.newIngrediantList.next(this.ingredients.slice())
  }
  addIngArray(data:Ingredient[]){
    this.ingredients.push(...data)
    this.newIngrediantList.next(this.ingredients.slice())
  }
}
