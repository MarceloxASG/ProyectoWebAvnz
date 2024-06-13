import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})

export class NavmenuComponent implements OnInit {
  activeSection: string = 'home';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = ['home', 'pagina1', 'pagina2', 'pagina3', 'pagina4', 'pagina5'];
    let currentSection = 'home';
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
        currentSection = section;
      }
    }
    this.activeSection = currentSection;
  }

  constructor() { }

  ngOnInit(): void { }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = section;
    }
  }
}
