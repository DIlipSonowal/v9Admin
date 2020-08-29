import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {FormControl} from '@angular/forms';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-vission',
  templateUrl: './vission.component.html',
  styleUrls: ['./vission.component.scss']
})
export class VissionComponent implements OnInit {
  files = []; listAdd: FormArray;
  serializedDate = new FormControl((new Date()).toISOString());
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  constructor(private fb: FormBuilder, private _ngZone: NgZone, private slider: HomeService) { }
   vissionForm = this.fb.group({
    header: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    text_content: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(1000)]],
    files: ['', [Validators.required]],
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
  if(event.length <=1){
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files[0] = element.name;
    }
    this.vissionForm.get('files').setValue(event[0]);
  }

}
saveTopSLider() {
  const formData = new FormData();
  formData.append('files', this.vissionForm.get('files').value);
  formData.append('header', this.vissionForm.get('header').value);
  formData.append('text_content', this.vissionForm.get('text_content').value);
  console.log(this.vissionForm.value);
  this.slider.topSlider(formData).subscribe( res =>{
    console.log(res);
  });
}
resetForm(){
  this.vissionForm.reset();
}
}
