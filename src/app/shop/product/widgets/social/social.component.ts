import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/classes/product';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  @Input() product: Product;
  urlProduct: string;

  constructor() { }

  ngOnInit(): void {
    if (this.product) {
      this.urlProduct = `${location.origin}/shop/product/left/sidebar/${this.product.title.replace(' ', '-')}`;
    }
  }

}
