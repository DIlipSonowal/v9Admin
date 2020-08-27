import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  files = []; filesCountry =[];formArr: FormArray;city = []; other = []; work = []; study = []; visit = [];
  @ViewChild('autosize') autosize: CdkTextareaAutosize; visaIcon = [];
  header: any;
  constructor(private fb: FormBuilder, private _ngZone: NgZone) { }
  serviceForm = this.fb.group({
    title: [""],
    des: [""],
    family: this.fb.group({
      title: [""],
      para: [''],
      icon: ['']
    }),
    work: this.fb.group({
      title: [""],
      para: [''],
      icon: ['']
    }),
    study: this.fb.group({
      title: [""],
      para: [''],
      icon: ['']
    }),
    visit: this.fb.group({
      title: [""],
      para: [''],
      icon: ['']
    }),
    citizenship: this.fb.group({
      title: [""],
      para: [''],
      icon: ['']
    }),
    other: this.fb.group({
      title: [""],
      para: [''],
      icon: ['']
    }),
  });

  public onChange( { editor }: ChangeEvent ) {
      const data = editor.getData();
      console.log( data );
  }

  ngOnInit(): void {
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
  uploadVisaIcon(event){
    console.log('events', event);
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.visaIcon.push(element.name)
    }
  }
  deleteVisaAttachment(index) {
    this.visaIcon.splice(index, 1)
  }
  uploadCityVisaIcon(event){
    console.log('events', event);
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.city.push(element.name)
    }
  }
  uploadOtherVisaIcon(event){
    console.log('events', event);
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.other.push(element.name)
    }
  }
  uploadFileWork(event){
    console.log('events', event);
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.work.push(element.name)
    }
  }
  uploadFileStudy(event){
    console.log('events', event);
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.study.push(element.name)
    }
  }
  uploadFileVisit(event){
    console.log('events', event);
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.visit.push(element.name)
    }
  }
  deleteCityAttachment(index) {
    this.city.splice(index, 1)
  }
  deleteOtherAttachment(index) {
    this.other.splice(index, 1)
  }
  deleteAttachmentWork(index) {
    this.work.splice(index, 1)
  }
  deleteAttachmentStudy(index) {
    this.study.splice(index, 1)
  }
  deleteAttachmentVisit(index) {
    this.visit.splice(index, 1)
  }
  serviceSubmit(){
    console.log('values', this.serviceForm.value);
  }
  resetForm(){
    this.serviceForm.reset();
  }
}
