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
  boats = [
    {
    name: 'Starfire',
    year: 1997,
    img: "assets/boat.jpg"
  },{
    name: 'Starfire2',
    year: 1999,
    img: "assets/boat.jpg"
  },{
    name: 'Starfire3',
    year: 2000,
    img: "assets/boat.jpg"
  },
]

  handleClick() {
    this.clicked = true;
  }
}
