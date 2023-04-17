import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  @Output() navItem = new EventEmitter<string>();
  shoppingBasket = '../../assets/chef.png';

  onSelect(navItem: string){
    this.navItem.emit(navItem);
  }
}
