import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  @ViewChild('contenedor') contenedor!: ElementRef;
  @ViewChild('aboutMe') aboutMe!: ElementRef;
  @ViewChild('experience') experience!: ElementRef;



}
