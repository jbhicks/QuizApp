import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {MdSliderModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.shouldShuffle = true;
  }
  title = 'Quiz Me v.1';
  shouldShuffle: boolean;

}
