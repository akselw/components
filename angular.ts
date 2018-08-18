import { Component, AfterViewInit } from '@angular/core';
import { Elm } from '../dist/elm/main';

@Component({
  selector: 'elm-embed',
  template: '<div id="elm-embed"></div>',
})
export class ElmComponent implements AfterViewInit {
  ngAfterViewInit() {
    const app = Elm.Main.init({
      node: document.getElementById('elm-embed'),
    });
    // set up ports however you want
  }
}
