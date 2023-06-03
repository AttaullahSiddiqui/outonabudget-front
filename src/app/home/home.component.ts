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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
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
  config2: any;
  couponsArray = null;

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
    this.config2 = {
      slidesPerView: this.smallScreen ? 1 : 6,
      spaceBetween: 25,
      slidesPerGroup: this.smallScreen ? 1 : 6,
      autoplay: false,
      navigation: true,
      // pagination: { clickable: true },
      scrollbar: false,
      direction: 'horizontal',
      loop: true,
      loopFillGroupWithBlank: true,
      grabCursor: true,
    };
  }

  searchFunc(queri: any) {
    if (!queri) return;
    this.noResult = false;
    this.storeArray = null;
    this._dataService
      .fetchAPIWithLimit('/userDisplay/searchQuery', 10, queri, '')
      .subscribe((res) => {
        if (res.data) {
          this.storeArray = res.data;
        } else this.noResult = true;
      });
  }
  focusOutFunc() {
    setTimeout(() => {
      this.switch = false;
    }, 300);
  }
  onSwiper(swiper: any) {
    swiper.update();
  }
}
