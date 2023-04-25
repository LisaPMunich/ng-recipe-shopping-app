import {Recipe} from "../models/recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe('Vegetable Stir Fry', 'This healthy and delicious vegetable stir fry is quick and easy to make. It\'s packed with nutrients and perfect for a weeknight dinner.', 'https://images.pexels.com/photos/5908020/pexels-photo-5908020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
    new Recipe('Chicken Tacos', 'These flavorful chicken tacos are perfect for a taco night. They\'re easy to make and taste amazing with fresh salsa and guacamole.', 'https://images.pexels.com/photos/14473870/pexels-photo-14473870.jpeg'),
    new Recipe('Quinoa Salad with Avocado and Tomatoes','This quinoa salad with avocado and tomatoes is a healthy and flavorful side dish. It\'s packed with protein and perfect for a summer barbecue.','https://p1.pxfuel.com/preview/903/818/350/quinoa-salad-healthy.jpg'),
    new Recipe('One-Pan Lemon Garlic Shrimp and Asparagus',
      'This one-pan lemon garlic shrimp and asparagus recipe is easy to make and perfect for a quick weeknight dinner. It\'s healthy and packed with flavor.', 'https://images.pexels.com/photos/10875193/pexels-photo-10875193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')
  ];

  getRecipes(){
    return this.recipes.slice();
  }


}
