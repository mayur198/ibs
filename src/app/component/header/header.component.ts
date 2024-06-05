import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navbarCollapse') 
  navbarCollapse!: ElementRef;
  scrolled: boolean = false;
  

  constructor() { }
  
  ngOnInit(): void {
  } 

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset > 50) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
  toggleCollapse() {
    const collapse = this.navbarCollapse.nativeElement;
    if (collapse.classList.contains('show')) {
      collapse.classList.remove('show');
    } else {
      collapse.classList.add('show');
    }
  }
  closeNavbar() {
    if (this.navbarCollapse.nativeElement.classList.contains('show')) {
      this.navbarCollapse.nativeElement.classList.remove('show');
    }
  }

}
