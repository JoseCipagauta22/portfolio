import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Header } from './interfaces/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  @ViewChild('contenedor') contenedor!: ElementRef;
  @ViewChild('aboutMe') aboutMe!: ElementRef;
  @ViewChild('experience') experience!: ElementRef;
  @ViewChild('contacMe') contacMe!: ElementRef;

  referencesMap: { [key: string]: ElementRef<any> } = {};
  ngAfterViewInit(): void {
    this.referencesMap = {
      contacMe: this.contacMe,
      experience: this.experience,
      aboutMe: this.aboutMe,
      contenedor: this.contenedor,
    };
  }

  onNotify(event: Header){
    // console.log('padre notificdo');
    // console.log(event);
    const { elemeToScroll, evento } = event;
    this.hacerScroll(elemeToScroll, evento)
  }

  hacerScroll(eToS: string, event: Event) {
    event.preventDefault();
    let element = this.referencesMap[eToS].nativeElement;

    
    console.log(this.contacMe.nativeElement.id);

    const contenedor = this.contenedor.nativeElement;
    const elementPosition = element.getBoundingClientRect().top;
    const contenedorPosition = contenedor.getBoundingClientRect().top;
    const startPosition = contenedor.scrollTop;
    const offsetPosition = elementPosition - contenedorPosition + contenedor.scrollTop;
    const distance = offsetPosition - startPosition;
  
    const duration = 1500;
    let startTime: number | null = null;
  
    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
      if (distance >= 1 || distance <= -1) {
        contenedor.scrollTo(0, run);
      }

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
    requestAnimationFrame(animation);
  }
  
  easeInOutQuad(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
}
