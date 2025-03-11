import { Component, EventEmitter, Output } from '@angular/core';
import { Header } from '../../interfaces/interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  @Output() notify = new EventEmitter<Header>();
  notifyParent(e:Header): void {
    this.notify.emit(e);
  }
}
