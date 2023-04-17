import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedNavItem = 'Recipes';

  onNavigate(navItem: string){
    this.loadedNavItem = navItem;
  }
}
