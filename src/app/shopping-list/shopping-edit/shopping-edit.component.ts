import { Component, ElementRef, OnInit, ViewChild, EventEmitter,Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild ('ingredientName') ingredientName: ElementRef
  @ViewChild ('ingredientAmount') ingredientAmount: ElementRef
  constructor(private _shopingListService:ShopingListService) { }
  @Output() myAddIngredient= new EventEmitter<Ingredient>()
  ngOnInit() {
  }
  onItemAdd(){
    const ingName= this.ingredientName.nativeElement.value;
    const ingAmount= this.ingredientAmount.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount)
    this.myAddIngredient.emit(newIngredient)
  }

}
