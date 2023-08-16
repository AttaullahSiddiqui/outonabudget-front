import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newsbycategory',
  templateUrl: './newsbycategory.component.html',
  styleUrls: ['./newsbycategory.component.scss'],
})
export class NewsbycategoryComponent implements OnInit {
  routeParam: any = null;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.routeParam = paramMap.get('category');
    });
  }
}
