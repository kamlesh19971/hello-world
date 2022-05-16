import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';
import { Observable } from 'rxjs';
import { combineLatest, map } from 'rxjs';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) {
  }

  ngOnInit(): void {

    combineLatest(
      this.route.paramMap,
      this.route.queryParamMap
    )
      .pipe(switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        // this.service.getAll({ id: id, page: page });

        return this.service.getAll();
      }))
      .subscribe(followers => this.followers = followers);


  }

}
