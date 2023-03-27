import { Component } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Vegetable Stir Fry', 'This healthy and delicious vegetable stir fry is quick and easy to make. It\'s packed with nutrients and perfect for a weeknight dinner.', 'https://live.staticflickr.com/4435/36308432714_fa80b35856_b.jpg'),
    new Recipe('Chicken Tacos', 'These flavorful chicken tacos are perfect for a taco night. They\'re easy to make and taste amazing with fresh salsa and guacamole.', 'https://live.staticflickr.com/6212/6332996010_0b0d40bf09_b.jpg')
  ];
}
