import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-filter',
  imports: [CommonModule],
  templateUrl: './tech-filter.component.html',
  styleUrl: './tech-filter.component.css'
})
export class TechFilterComponent {
  techList = [
    {name: 'Angular', image: 'assets/images/angular.png'},
    {name: 'React', image: 'assets/images/react.png'},
    {name: 'Azure', image: 'assets/images/azure.png'},
    {name: '.NET Core', image: 'assets/images/dotnetcore.png'},
    {name: 'Javascript', image: 'assets/images/javascript.png'},
  ]
}
