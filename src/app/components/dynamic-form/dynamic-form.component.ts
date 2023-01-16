import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  dynamicForm  = {
    "name": "createBlog",
    "header": {
        "title": "Add blog content"
    },
    "content": {
        "controls": [{
            "name": "blogTitle",
            "component": "INPUT",
            "productType": "BLOG_FORM",
            "label": "Blog title",
            "placeholder": "Provide blog's title",
            "description": "",
            "cols": ["12", "12", "12", "12", "12", "12"],
            "defaultValue": "",
            "disabled": false,
            "validation": {
                "mandatory": true,
                "minLength": 200,
                "maxLength": 500,
                "customValidation": "abc,def,ghi",
                "pattern": "ABdjdjd87687JHGJ"
            }
        }, {
            "name": "featuredImage",
            "component": "UPLOAD_BOX",
            "productType": "BLOG_FORM",
            "label": "Upload featred image",
            "placeholder": "Provide some brief about the content",
            "description": "Try to use landscape image.",
            "cols": ["12", "12", "12", "12", "12", "12"],
            "defaultValue": "",
            "disabled": false,
            "validation": {
                "mandatory": true,
                "minLength": 200,
                "maxLength": 500,
                "customValidation": "abc,def,ghi",
                "pattern": "ABdjdjd87687JHGJ"
            }
        }, {
            "name": "blogBrief",
            "component": "TEXTAREA",
            "productType": "BLOG_FORM",
            "label": "Upload featred image",
            "placeholder": "Provide some brief about the content",
            "description": "suggest user what to enter here",
            "cols": ["12", "12", "12", "12", "12", "12"],
            "defaultValue": "",
            "disabled": false,
            "validation": {
                "mandatory": true,
                "minLength": 200,
                "maxLength": 500,
                "customValidation": "abc,def,ghi",
                "pattern": "ABdjdjd87687JHGJ"
            }
        }, {
            "name": "blogArticle",
            "component": "MULTIPLE_CONTROL",
            "label": "",
            "description": "",
            "cols": ["12", "12", "12", "12", "12", "12"],
            "disabled": false,
            "validation": {
                "mandatory": true,
                "minLength": 200,
                "maxLength": 500,
                "customValidation": "abc,def,ghi",
                "pattern": "ABdjdjd87687JHGJ"
            },
            "defaultValue": "",
            "controls": [{
                "name": "paragraphTitle",
                "component": "INPUT",
                "productType": "BLOG_FORM",
                "placeholder": "Paragraph title",
                "description": "suggest user what to enter here",
                "cols": ["12", "12", "12", "12", "12", "12"],
                "defaultValue": "",
                "disabled": false,
                "validation": {
                    "mandatory": true,
                    "minLength": 200,
                    "maxLength": 500,
                    "customValidation": "abc,def,ghi",
                    "pattern": "ABdjdjd87687JHGJ"
                }
            },{
                "name": "paragraphContent",
                "component": "TEXTAREA",
                "productType": "BLOG_FORM",
                "placeholder": "Paragraph content",
                "description": "suggest user what to enter here",
                "cols": ["12", "12", "12", "12", "12", "12"],
                "defaultValue": "",
                "disabled": false,
                "validation": {
                    "mandatory": true,
                    "minLength": 200,
                    "maxLength": 500,
                    "customValidation": "abc,def,ghi",
                    "pattern": "ABdjdjd87687JHGJ"
                }
            }]
        }]
    },
    "footer": {}
};
  constructor(private formService: FormService) { }
  formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.formService.generateForm(this.dynamicForm);
    console.log(this.formGroup);
  }

}
