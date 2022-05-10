import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input("isFavorite") isSelected: boolean | undefined;

  @Output() change = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected });
  }
}


export interface FavoriteChangedEventArgs {
  newValue: boolean;
}