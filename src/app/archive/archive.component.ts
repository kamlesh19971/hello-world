import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  year: any = "";
  month: any = "";
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(paramMap => {

      this.year = paramMap.get("year");
      this.month = paramMap.get("month");

    })

  }


  gotoList() {
    this.router.navigate([''],);
  }
}
