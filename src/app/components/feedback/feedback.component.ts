import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  files = []; filesCountry =[];formArr: FormArray;  files2 = []; files3 = [];
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  header: any;
  constructor(private fb: FormBuilder, private _ngZone: NgZone) { }
   feedbackForm = this.fb.group({
    section1: this.fb.group({
      name: [""],
      para: [''],
      icon: ['']
    }),
    section2: this.fb.group({
      name: [""],
      para: [''],
      icon: ['']
    }),
    section3: this.fb.group({
      name: [""],
      para: [''],
      icon: ['']
    }),
  });

  public onChange( { editor }: ChangeEvent ) {
      const data = editor.getData();
      console.log( data );
  }

  ngOnInit(): void {
    this.dynamicHeader();
  }
  triggerResize() {
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  uploadFile(event) {
    console.log('events', event);
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }
  }
  uploadFile2(event){
    console.log('events', event);
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files2.push(element.name)
    }
  }
  uploadFile3(event){
    console.log('events', event);
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files3.push(element.name)
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }
  deleteAttachment2(index) {
    this.files2.splice(index, 1)
  }
  deleteAttachment3(index) {
    this.files3.splice(index, 1)
  }
   dynamicHeader():FormArray {
   return  this.formArr = this.feedbackForm.controls.icons as FormArray;
  }
  serviceSubmit(){
    console.log('values', this.feedbackForm.value);
  }
  resetForm(){
    this.feedbackForm.reset();
  }
}
