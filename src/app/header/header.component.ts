import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  
  @Output() throwSting=new EventEmitter<string>();

  nevigationInNavbar(nevigationString:string){
    this.throwSting.emit(nevigationString)
  }
}
