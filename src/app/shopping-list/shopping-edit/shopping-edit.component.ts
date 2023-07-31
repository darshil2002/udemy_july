import { Ingredient } from './../../shared/ingredient.model';
import { Subscription } from 'rxjs';
import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild, HostBinding, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShopingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild ('f') slForm:NgForm;

  subscription:Subscription;

  editMode=false;
  shopingListId:number;
  editItem:Ingredient;

  constructor(private _shopingListService:ShopingListService) { }

  ngOnInit() {
    this.subscription=this._shopingListService.editId.subscribe((res)=>{
      this.shopingListId=res;
      this.editMode=true;
      this.editItem=this._shopingListService._getIngredient(this.shopingListId);
      this.slForm.setValue({
        name:this.editItem.name,
        number:this.editItem.amount
      })
    })
  }

  onItemAddOrEdit(f:NgForm){
    if(this.editMode==false){
      let value=f.value;
      const newIngredient = new Ingredient(value.name,value.number);
      this._shopingListService.addIng(newIngredient);
    }
    else{
      const value=f.value;
      const editIngredient=new Ingredient(value.name,value.number)
      this._shopingListService.editIngredientValue(this.shopingListId,editIngredient)
    }
    this.slForm.reset()
    this.editMode=false;
  }

  deleteIngredient(){
    this._shopingListService.deleteIngredientValue(this.shopingListId)
    this.clearForm()
  }
  clearForm(){
    this.slForm.reset()
    this.editMode=false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
