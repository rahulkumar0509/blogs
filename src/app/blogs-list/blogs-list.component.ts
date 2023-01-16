import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
})
export class BlogsListComponent implements OnInit {

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/blogs/food');
  }
  redirectToBlog(){
    this.router.navigateByUrl('/blogs/write');
  }
  readBlog(data){
    this.appService.setScreenDataTransfer(data);
    sessionStorage.setItem('blogData', data);
    this.router.navigateByUrl('/blogs/read')
  }
}
