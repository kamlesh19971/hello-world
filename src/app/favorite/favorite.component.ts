import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styles: [
    `
      .btn {
          color: green;
          border: 1px solid green;
      }
    `
  ],
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  @Input("isFavorite") isSelected: boolean | undefined;
  @Output('change') click = new EventEmitter();


  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }
}


export interface FavoriteChangedEventArgs {
  newValue: boolean;
}