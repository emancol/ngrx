import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators?.required, Validators.minLength(6)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)])
  })
  constructor() { }

  ngOnInit(): void {
  }

  showDescriptionErrors(): string | void {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm?.touched && !descriptionForm.valid) {
      if (descriptionForm.errors?.['required']) {
        return 'description is required'
      }
      if (descriptionForm.errors?.['minlength']) {
        return 'Description should be of minimum 10 characters length'
      }

    }
  }

  onAddPost(): void {
    if (!this.postForm.valid) {
      return
    }
    console.log(this.postForm.value)
  }

}
