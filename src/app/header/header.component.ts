import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  darkTheme =  new FormControl(false);
  public text: string = 'Light Mode';

  constructor(private themeService: ThemeService) {
    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.themeService.toggleDark();
      } else {
        this.themeService.toggleLight();
      }
    });
    
  }

  ngOnInit(): void {
  }
  public changeText(): void {
    if(this.text === 'Light Mode') { 
      this.text = 'Dark Mode'
    } else {
      this.text = 'Light Mode'
    }
  }
}
