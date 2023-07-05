import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  clicked = false;
  title ='this is a title';

// Boat Data
  boat = {
    name: 'starfire',
    year: 1997,
    img: "assets/boat.jpg"
  }

  handleClick() {
    this.clicked = true;
  }
}
