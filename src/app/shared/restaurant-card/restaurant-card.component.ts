import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})

export class RestaurantCardComponent {
  @Input() restaurant: any;  
  @Output() removeCardEvent = new EventEmitter<string>();

  removeElement(restaurantName: string) {
    console.log(restaurantName);
    this.removeCardEvent.emit(restaurantName);
  }
}
