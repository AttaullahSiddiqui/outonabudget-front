import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
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
import { filter } from 'rxjs';

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
  currentRoute: string = '';
  showNavBarArr = [
    'media',
    'stores',
    'store',
    'categories',
    'category',
    'blogs',
    'blog',
  ];

  constructor(private _dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.forEach((event: any) => {
      if (event instanceof NavigationStart) {
        // console.log(event.url);
        this.currentRoute = event.url;
      }
    });
    if (window.screen.width < 830) this.smallScreen = true;
    this._dataService.fetchAPI('/userDisplay/fetchSlides').subscribe((res) => {
      if (res.data) this.slideArray = res.data;
      else this._dataService.errorToast(res.message);
    });
  }
  closeOffCanvas() {
    var ggg = document.querySelector('#canvasCloseBtn') as HTMLElement;
    setTimeout(() => {
      ggg.click();
    }, 100);
  }
  isShowNavBar() {
    var location = window.location.pathname;
    for (var i = 0; i < this.showNavBarArr.length; i++) {
      if (location.includes(this.showNavBarArr[i])) return true;
    }
    return false;
  }
  onSwiper(swiper: any) {
    swiper.update();
  }
}
