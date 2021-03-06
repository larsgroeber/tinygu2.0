import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.css']
})
export class ShortenerComponent implements OnInit {
  inputUsed = false;
  showMoreOptions = false;
  link = '';
  shortLink = '';


  constructor() { }

  onInput() {
    this.inputUsed = !!this.link;

  }

  onMoreOptions() {
    this.showMoreOptions = !this.showMoreOptions;
  }

  shorten() {

  }

  ngOnInit() {
  }
}
