import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  selectedCategory = null;
  myPlaceHolder1 = 'Search by Category';

  categories = [
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id: 3, name: 'ccc' },
    { id: 4, name: 'ddd' },
    { id: 1, name: 'eee' },
    { id: 2, name: 'fff' },
    { id: 3, name: 'ggg' },
    { id: 4, name: 'hhh' },
    { id: 1, name: 'iii' },
    { id: 2, name: 'jjj' },
    { id: 3, name: 'kkk' },
    { id: 4, name: 'lll' },
  ];

  onSearch1($event: any) {
    this.myPlaceHolder1 = $event.term == '' ? 'Search by Category' : '';
  }
  secondaryFunc(abc: any) {
    var _self = this;
    // var xyz = Object.values(this.categories);
    // xyz.forEach(function (val) {
    //   if (val['categoryURL'] == abc) {
    //     _self.selectedCat = val['name'];
    //     _self.loadStores(val, val['categoryURL']);
    //   }
    // });
  }
  // loadStores(catNode, slctdURL) {
  //   if (this.isLoading) return;
  //   this.isLoading = true;
  //   this.storeArr = null;
  //   this.titleService.setTitle(catNode['metaTitle']);
  //   this.metaService.updateTag({
  //     name: 'description',
  //     content: catNode['metaDescription'],
  //   });
  //   this.metaService.updateTag({
  //     property: 'og:description',
  //     content: catNode['metaDescription'],
  //   });
  //   this._dataService
  //     .fetchWithQuery('/userDisplay/fetchStores', catNode._id)
  //     .subscribe((res) => {
  //       if (res.data) {
  //         this.storeArr = res.data;
  //         this.isLoading = false;
  //         this.selectedCatURL = slctdURL;
  //       } else this.errorHandler(res.message);
  //     });
  // }
}
