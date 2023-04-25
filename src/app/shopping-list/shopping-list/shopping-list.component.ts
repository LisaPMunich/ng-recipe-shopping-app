import { Component } from '@angular/core';
import {Ingredient} from "../../shared/models/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
  new Ingredient('Banana', 3)
  ];

  onIngredientCreated(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
