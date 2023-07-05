import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {of} from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  boats : Array;

  constructor() { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.boats = of([
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
  ]);
  }

  clicked = false;
  title ='this is a title';

  handleClick() {
    this.clicked = true;
  }
}
