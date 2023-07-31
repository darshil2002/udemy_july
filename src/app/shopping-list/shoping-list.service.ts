import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopingListService {

  newIngrediantList=new Subject<Ingredient[]>();
  editId=new Subject<number>()
  constructor() { }
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  _getIngredients(){
    return this.ingredients.slice();
  }

  _getIngredient(index:number):Ingredient{
    return this.ingredients[index]
  }

  addIng(myData:Ingredient){
    this.ingredients.push(myData);
    this.newIngrediantList.next(this.ingredients.slice())
  }

  addIngArray(data:Ingredient[]){
    this.ingredients.push(...data)
    this.newIngrediantList.next(this.ingredients.slice())
  }

  editIngredientValue(index:number,data:Ingredient){
    this.ingredients[index]=data;
    this.newIngrediantList.next(this.ingredients.slice());
  }
  deleteIngredientValue(index:number){
    this.ingredients.splice(index,1);
    this.newIngrediantList.next(this.ingredients.slice());
  }
}
