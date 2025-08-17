import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  // Header
  header = {
    logo: './assets/Images/wasm alsiba Vertical PNG Logo.png',
    button: 'صوت الآن',
    menu : [ 
      { label: 'الرئيسية', id: 'home' },
      { label: 'الإحصائيات', id: 'stats' },
      { label: 'الخدمات', id: 'services' },
      { label: 'الخطوات', id: 'steps' },
      { label: 'الأهداف', id: 'goals' },
      { label: 'تواصل معنا', id: 'footer' }
    ]
  };
  

}
