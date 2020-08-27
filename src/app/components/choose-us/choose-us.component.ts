import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.scss']
})
export class ChooseUsComponent implements OnInit {
  files = []; filesCountry =[];formArr: FormArray;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  header: any;
  constructor(private fb: FormBuilder, private _ngZone: NgZone) { }
   taskForm = this.fb.group({
    header: [""],
    subHeader: [""],
    immigration: this.fb.group({
      title: [""],
      count: [""],
      para: [''],
      icon: ['']
    }),
    customer: this.fb.group({
      title: [""],
      count: [""],
      para: [''],
      icon: ['']
    }),
    student: this.fb.group({
      title: [""],
      count: [""],
      para: [''],
      icon: ['']
    }),
    country: this.fb.group({
      title: [""],
      count: [""],
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
    // Wait for changes to be applied, then trigger textarea resize.
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
  uploadFileCountry(event){
    console.log('events', event);
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.filesCountry.push(element.name)
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }
   dynamicHeader():FormArray {
   return  this.formArr = this.taskForm.controls.icons as FormArray;
  }
  serviceSubmit(){
    console.log('values', this.taskForm.value);
  }
  resetForm(){
    this.taskForm.reset();
  }
}
