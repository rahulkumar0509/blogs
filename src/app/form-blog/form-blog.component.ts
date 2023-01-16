import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form-blog',
  templateUrl: './form-blog.component.html',
  styleUrls: ['./form-blog.component.scss']
})
export class FormBlogComponent implements OnInit {

  title = 'questionaire';
  featured_image: any;
  personalityForm: FormGroup;
  contentForm: FormGroup;
  blogPayload: FormData;

  @ViewChild('imageUpload', { static: false }) imageUpload!: ElementRef;
  @ViewChild('imageSpace', { static: false }) imageSpace!: ElementRef;

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
    this.contentForm = new FormGroup({
      title: new FormControl('', Validators.required),
      contentType: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  
    this.personalityForm = new FormGroup({
      title: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      subtype: new FormControl('', Validators.required),
      slogan: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      tags: new FormControl('', Validators.required),
      brief: new FormGroup({
        title: new FormControl('', Validators.required),
        introduction: new FormControl('', Validators.required)
      }),
      content: new FormArray([this.contentForm]),
      conclusion: new FormControl('', Validators.required),
      authorName: new FormControl('', Validators.required),
      authorEmail: new FormControl('', Validators.required)
    })
  }

  getContentForm(){
    return this.personalityForm.get('content') as FormArray;
  }
  addNewContent(){
    let newContent = new FormGroup({
      title: new FormControl('', Validators.required),
      contentType: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
    this.getContentForm().push(newContent);
  }
  uploadImage(e: any) {
    this.blogPayload = new FormData();
    let files = e.srcElement.files;
    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      this.blogPayload.append(i.toString(), file, file.name);
      let img = document.createElement("img");
      let reader = new FileReader();
      reader.onloadend =  () => {
        img.src = reader.result?.toString() || '';
        img.style.width = '100%';
      }
      reader.readAsDataURL(file);
      this.imageSpace.nativeElement.style.display = 'block';
      this.imageSpace.nativeElement.appendChild(img);
      this.imageUpload.nativeElement.style.display = 'none';
    }
  }

  bringBackUploadImage() {
    this.blogPayload = null;
    this.imageSpace.nativeElement.lastChild.remove();
    this.imageUpload.nativeElement.style.display = 'block';
    this.imageSpace.nativeElement.style.display = 'none';
  }

  onSubmit(): void {
    let blog = this.personalityForm.value;
    blog['date'] = new Date().toISOString();
    blog['posted'] = 'posted on ' +new Date().toDateString() + ' by ' + blog['authorName'];
    if(this.blogPayload){
      this.blogPayload.append('blogData', JSON.stringify(blog));
    } else{
      this.blogPayload = new FormData();
      this.blogPayload.append('blogData', JSON.stringify(blog));
    }
    
    console.log(JSON.stringify(this.blogPayload));
    let url = '/blogs/write';
    // return ;
    // var queryString = Object.keys(blog).map(key => key + '=' + blog[key]).join('&');
    this.appService.httpPost(url, this.blogPayload).subscribe({
      next: (v) => {
        // console.log(v);
        this.router.navigateByUrl('/blogs');
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {}
    })
    this.blogPayload = null;
  }
}