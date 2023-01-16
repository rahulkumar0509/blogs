import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personality-homepage',
  templateUrl: './personality-homepage.component.html',
  styleUrls: ['./personality-homepage.component.scss']
})
export class PersonalityHomepageComponent implements OnInit {
  header;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.header = {
      name: "World's Famous Personality",
      menu: ['stories', 'about']
    };
  }
  redirect(){
    this.router.navigateByUrl('/blogs/personality/article');
  }

}
