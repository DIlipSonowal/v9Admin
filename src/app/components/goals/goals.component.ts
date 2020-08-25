import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  files = [];
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  constructor(private fb: FormBuilder, private _ngZone: NgZone) { }
   taskForm = this.fb.group({
    header: [""],
    subHeader: [""],
    files: [''],
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
deleteAttachment(index) {
  this.files.splice(index, 1)
}
}
