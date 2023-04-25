import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Recipe } from "../../shared/models/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() onRecipeSelected = new EventEmitter<void>();

  onSelected(){
    this.onRecipeSelected.emit();
  }

}
