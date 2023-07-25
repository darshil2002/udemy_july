import { Injectable,EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShopingListService {

  newIngrediantList=new EventEmitter<Ingredient[]>();

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
    this.newIngrediantList.emit(this.ingredients.slice())
  }
  addIngArray(data:Ingredient[]){
    this.ingredients.push(...data)
    this.newIngrediantList.emit(this.ingredients.slice())
  }
}
