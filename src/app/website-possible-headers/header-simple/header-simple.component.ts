import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-simple',
  templateUrl: './header-simple.component.html',
  styleUrls: ['./header-simple.component.scss']
})
export class HeaderSimpleComponent implements OnInit {

  @Input() headerInfo;
  constructor() { }

  ngOnInit(): void {
    console.log(this.headerInfo);
    // this.headerInfo = {
    //   name: "delhi's famous kulchas",
    //   menu: ['recipes', 'stories', 'about']
    // }
  }

}
