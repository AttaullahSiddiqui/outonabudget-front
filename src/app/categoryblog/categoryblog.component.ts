import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categoryblog',
  templateUrl: './categoryblog.component.html',
  styleUrls: ['./categoryblog.component.scss'],
})
export class CategoryblogComponent implements OnInit {
  faArrowRightLong = faArrowRightLong;
  routeParam: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.routeParam = paramMap.get('id');
    });
  }
}
