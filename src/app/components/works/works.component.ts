import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  files = []; filesCountry =[];formArr: FormArray;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  header: any;
  constructor(private fb: FormBuilder, private _ngZone: NgZone) { }
   worksForms = this.fb.group({
    header: [""],
    subHeader: [""],
    discussion: this.fb.group({
      title: [""],
      count: [""],
      para: [''],
    }),
    documentation: this.fb.group({
      title: [""],
      count: [""],
      para: [''],
    }),
    submission: this.fb.group({
      title: [""],
      count: [""],
      para: [''],
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

  serviceSubmit(){
    console.log('values', this.worksForms.value);
  }
  resetForm(){
    this.worksForms.reset();
  }
}
