import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {FormControl} from '@angular/forms';
import { HomeService } from '../../services/home.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  date = new FormControl(new Date());
  files = [];
  serializedDate = new FormControl((new Date()).toISOString());
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  constructor(private fb: FormBuilder, private _ngZone: NgZone, private slider: HomeService) { }
   topSlider = this.fb.group({
    header: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    sub_header: ["",  [Validators.required, Validators.minLength(10), Validators.maxLength(150)]],
    text_content:[""],
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
    this.topSlider.get('files').setValue(event[0]);
  }
  
}
// deleteAttachment(index) {
//   //this.files.splice(index, 1)
//   this.topSlider.value.files = '';
// }
saveTopSLider() {
  const formData = new FormData();
  formData.append('files', this.topSlider.get('files').value);
  formData.append('header', this.topSlider.get('header').value);
  formData.append('sub_header', this.topSlider.get('sub_header').value);
  formData.append('text_content', this.topSlider.get('text_content').value);
  console.log(this.topSlider.value);
  this.slider.topSlider(formData).subscribe( res =>{
    console.log(res);
  });
}
}
