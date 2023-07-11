import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild, EventEmitter,Output,HostBinding } from '@angular/core';
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
  constructor(private _shopingListService:ShopingListService,private el:ElementRef) { }
  @Output() myAddIngredient= new EventEmitter<Ingredient>()
  ngOnInit() {
    // this.textColor="green";
    this.el.nativeElement.style.color="blue"
  }
  // @HostBinding ('style.color')textColor;


  onItemAdd(){
    const ingName= this.ingredientName.nativeElement.value;
    const ingAmount= this.ingredientAmount.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount)
    this.myAddIngredient.emit(newIngredient)
  }

}
