import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { SearchTaskComponent } from '../search-task/search-task.component';
import { NgClass } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-header',
  imports: [CreateTaskComponent, SearchTaskComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',

})
export class HeaderComponent {
  addOpen: boolean = false;

  darkMode: boolean = false;

  colorMode() {
    let root = document.documentElement;
    this.darkMode = !this.darkMode;

    const white = getComputedStyle(root).getPropertyValue('--white-color');
    const grey = getComputedStyle(root).getPropertyValue('--grey-color');

    root.style.setProperty('--grey-color', white);
    root.style.setProperty('--white-color', grey);
  }
}