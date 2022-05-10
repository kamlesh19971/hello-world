import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {

  @Input() isSelected: boolean | undefined;

  constructor() {

  }

  ngOnInit(): void {
  }

  onClick() {
    this.isSelected = !this.isSelected;
  }
}
