import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  inEditMode=false

  constructor(private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((res:Params)=>{
      if(res['id']){
        this.inEditMode=true
      }
    })
    console.log(this.inEditMode);
  }

}
