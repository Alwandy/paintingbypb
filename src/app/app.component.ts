import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

      this.galleryOptions = [
          {
              width: '1000px',
              height: '900px',
              thumbnailsColumns: 4,
              imageAnimation: NgxGalleryAnimation.Slide
          },
          // max-width 800
          {
              breakpoint: 800,
              width: '100%',
              height: '600px',
              imagePercent: 80,
              thumbnailsPercent: 20,
              thumbnailsMargin: 20,
              thumbnailMargin: 20
          },
          // max-width 400
          {
              breakpoint: 600,
              preview: false
          }
      ];

      this.galleryImages = [
          {
              small: 'assets/images/1.jpeg',
              medium: 'assets/images/1.jpeg',
              big: 'assets/images/1.jpeg'
          },
          {
              small: 'assets/images/2.jpeg',
              medium: 'assets/images/2.jpeg',
              big: 'assets/images/2.jpeg'
          },
          {
              small: 'assets/images/3.jpeg',
              medium: 'assets/images/3.jpeg',
              big: 'assets/images/3.jpeg'
          },
          {
            small: 'assets/images/4.jpeg',
            medium: 'assets/images/4.jpeg',
            big: 'assets/images/4.jpeg'
        }
      ];
  }
}
