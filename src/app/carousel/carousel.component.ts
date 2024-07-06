import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [5, 9, 4].map((n) => `https://picsum.photos/id/${n}/1930/500`);
}
