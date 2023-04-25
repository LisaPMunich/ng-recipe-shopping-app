import {Component, EventEmitter, Output} from '@angular/core';
import { Recipe } from "../../shared/models/recipe.model";
import {RecipeService} from "../../shared/services/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[];

  constructor( private recipeService: RecipeService){}

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }


}
