import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('likesCount') likesCount: number = -1;
  @Input('isActive') isActive: boolean = false;

  onClick() {
    this.likesCount = this.isActive ? --this.likesCount : ++this.likesCount;
    this.isActive = !this.isActive;
  }

}
