import { Component, OnInit, ViewChildren, ElementRef, ViewChild, QueryList} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

export class HeroComponent implements OnInit {
  myName = "MYKOLA"
  mySurname = "CHERNYSHEVSKYI"
  myDesc = "Hello, my name is Mykola. I am a Front End Developer / Designer from Odessa, Ukraine. Here you can see some of my works."
  
  constructor(private spinner: NgxSpinnerService) { }

  @ViewChild('faceSlicer') faceSlicer: ElementRef;
  @ViewChild('faceSlice') faceSlice: ElementRef;
  @ViewChildren('textLine') textLine: QueryList<any>;
  @ViewChild('pagePreloader') pagePreloader: ElementRef;

  slicesCount = 6;

  sliceFace() {
    for (let i = 0; i < (this.slicesCount - 1); i++) {
      this.faceSlicer.nativeElement.appendChild(this.faceSlice.nativeElement.cloneNode(true));
    }
  }

  adjustSLices() {
    let slicesArr = this.faceSlicer.nativeElement.children;
    for (let i = 0; i < slicesArr.length; i++) {
      let imgHeight = slicesArr[i].querySelector('img').clientHeight;
      slicesArr[i].style.height = imgHeight / this.slicesCount + "px";
      slicesArr[i].querySelector('img').style.transform = "translateY(-" + (i * imgHeight / this.slicesCount) + "px)";
      slicesArr[i].querySelector('img').style.WebkitTransform = "translateY(-" + (i * imgHeight / this.slicesCount) + "px)";
      slicesArr[i].querySelector('img').style.msTransform = "translateY(-" + (i * imgHeight / this.slicesCount) + "px)";
    }
  }
  fadeOut(elem, ms) {
    if (!elem)
      return;
    if (ms) {
      let opacity = 1;
      let timer = setInterval(function () {
        opacity = 0;
        elem.style.opacity = opacity;
        elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        setTimeout(function () {
          if (opacity <= 0) {
            clearInterval(timer);
            opacity = 0;
            elem.style.display = "none";
            elem.style.visibility = "hidden";
          }
        
        }, ms);
      }, 50)
    }
    else {
      elem.style.opacity = 0;
      elem.style.filter = "alpha(opacity=0)";
      elem.style.display = "none";
      elem.style.visibility = "hidden";
    }
  }

  ngOnInit() {
    // this.spinner.show();
    this.sliceFace();
  }
  imageReady() {
    this.adjustSLices();
    
    this.textLine.forEach(div => div.nativeElement.classList.add('animateStart'));
    setTimeout(() => {
        // this.spinner.hide();
    }, 1000);
    setTimeout(() => {
      this.fadeOut(this.pagePreloader.nativeElement, 500);
    }, 1000);
  }
  onResize(event) {
    this.adjustSLices();
  }
}
