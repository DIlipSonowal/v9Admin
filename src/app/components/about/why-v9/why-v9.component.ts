import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {FormControl} from '@angular/forms';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-why-v9',
  templateUrl: './why-v9.component.html',
  styleUrls: ['./why-v9.component.scss']
})
export class WhyV9Component implements OnInit {
  date = new FormControl(new Date());
  files = []; listAdd: FormArray;
  serializedDate = new FormControl((new Date()).toISOString());
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  constructor(private fb: FormBuilder, private _ngZone: NgZone, private slider: HomeService) { }
   whyChooseUs = this.fb.group({
    header: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    text_content: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(1000)]],
    files: ['', [Validators.required]],
    lists: this.fb.array([
      this.fb.group({list:['']})
    ]),
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
    this.whyChooseUs.get('files').setValue(event[0]);
  }

}
saveTopSLider() {
  const formData = new FormData();
  formData.append('files', this.whyChooseUs.get('files').value);
  formData.append('header', this.whyChooseUs.get('header').value);
  formData.append('sub_header', this.whyChooseUs.get('sub_header').value);
  formData.append('text_content', this.whyChooseUs.get('text_content').value);
  console.log(this.whyChooseUs.value);
  this.slider.topSlider(formData).subscribe( res =>{
    console.log(res);
  });
}
ngAfterViewInit(){
}
resetForm(){
  this.whyChooseUs.reset();
}
addLists(){
   this.listAdd = this.whyChooseUs.controls.lists as FormArray;
  this.listAdd.push(
    this.fb.group({list:['']}));
}
deleteList(index){
 this.listAdd.removeAt(index);
}
}
