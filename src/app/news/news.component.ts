import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper';
SwiperCore.use([Pagination, Navigation]);
import {
  faGear,
  faStore,
  faTags,
  faUserCircle,
  faEnvelope,
  faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsComponent {
  switch = false;
  searchBox = null;
  isBusy: Boolean = false;
  mobile: Boolean = false;
  noResult = false;
  storeArray = null;
  faSettingIcon = faGear;
  faStoreIcon = faStore;
  faTagIcon = faTags;
  faUserIcon = faUserCircle;
  faEnvelope = faEnvelope;
  faArrowRightLong = faArrowRightLong;
  smallScreen: Boolean = false;
  config: any;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    if (window.screen.width < 830) this.smallScreen = true;
    this.config = {
      slidesPerView: this.smallScreen ? 1 : 3,
      spaceBetween: 30,
      slidesPerGroup: this.smallScreen ? 1 : 3,
      autoplay: false,
      navigation: true,
      pagination: { clickable: true },
      scrollbar: false,
      direction: 'horizontal',
      loop: true,
      loopFillGroupWithBlank: true,
      grabCursor: true,
    };
  }
  changeTab(param: Number) {
    this.switch = !this.switch;
  }
  onSwiper(swiper: any) {
    swiper.update();
  }
}
