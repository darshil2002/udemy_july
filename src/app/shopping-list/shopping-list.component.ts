import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from './shoping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  private mainSubscription:Subscription;

  ingredients: Ingredient[]

  constructor(private _shopinListService:ShopingListService) { }

  ngOnInit() {
    this.ingredients=this._shopinListService._getIngredients();
   this.mainSubscription=this._shopinListService.newIngrediantList.subscribe((res:Ingredient[])=>{
      this.ingredients=res;
    })
  }

  ngOnDestroy(): void {
    this.mainSubscription.unsubscribe();
  }

}
