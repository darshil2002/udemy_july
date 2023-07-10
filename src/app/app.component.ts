import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  finalData='recipe'
  onNevigate(myData){
    this.finalData=myData
    console.log(this.finalData)
  }
}
