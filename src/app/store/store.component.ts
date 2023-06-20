import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import {
  faFacebook,
  faFacebookSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StoreComponent implements OnInit {
  faFacebook = faFacebookSquare;
  faTwitter = faTwitter;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {}
}
