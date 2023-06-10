import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  EffectCube,
  Autoplay,
  EffectFade,
} from 'swiper';
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);
import { faBars, faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  faMenuIcon = faBars;
  faAdd = faAdd;
  config: SwiperOptions = {
    slidesPerView: 1,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    direction: 'horizontal',
    loop: true,
    loopFillGroupWithBlank: true,
    grabCursor: true,
    effect: 'fade',
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
  };
  slideArray = null;
  smallScreen: Boolean = false;

  constructor(private _dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    if (window.screen.width < 830) this.smallScreen = true;
    this._dataService.fetchAPI('/userDisplay/fetchSlides').subscribe((res) => {
      if (res.data) this.slideArray = res.data;
      else this._dataService.errorToast(res.message);
    });
  }
  closeOffCanvas(){
    var ggg = document.querySelector('#canvasCloseBtn') as HTMLElement;
    setTimeout(() => {
      ggg.click();
    }, 200);
  }
  onSwiper(swiper: any) {
    swiper.update();
  }
}
