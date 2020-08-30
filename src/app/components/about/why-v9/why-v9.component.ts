import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {FormControl} from '@angular/forms';
import { HomeService } from '../../../services/home.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-why-v9',
  templateUrl: './why-v9.component.html',
  styleUrls: ['./why-v9.component.scss']
})
export class WhyV9Component implements OnInit {
  date = new FormControl(new Date());
  final_file = "";
  files = []; listAdd: FormArray;
  serializedDate = new FormControl((new Date()).toISOString());
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  constructor(private fb: FormBuilder, private _ngZone: NgZone, private slider: HomeService, private _snackBar: MatSnackBar) { }
   whyChooseUs = this.fb.group({
    header: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    text_content: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(1000)]],
    files: ['', [Validators.required]],
    lists: this.fb.array([this.fb.group({list:['',[Validators.required]]})]),
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
 //   for (let index = 0; index < event.length; index++) {
      const element = event[0];
      this.files[0] = element.name;
    //}
    this.final_file = element;
  //  this.whyChooseUs.get('files').setValue(element.name);
  }

}
saveTopSLider() {
  const formData = new FormData();
  formData.append('images', this.final_file);
  formData.append('header', this.whyChooseUs.get('header').value);
  formData.append('lists', JSON.stringify(this.whyChooseUs.get('lists').value));
  formData.append('text_content', this.whyChooseUs.get('text_content').value);
  // console.log(this.whyChooseUs.value);
  this.slider.aboutVimmigration(formData).subscribe( (res:any) =>{
    this._snackBar.open(res.message, 'Close', {
      duration: 3000,
      verticalPosition :'top' 
    });
  });
}
ngAfterViewInit(){
}
resetForm(){
  this.whyChooseUs.reset();
}
get addLists(){
  return this.whyChooseUs.get('lists') as FormArray;
}
addaddLists() {
  this.addLists.push(this.fb.group({list:['',[Validators.required]]}));
}
deleteList(index){
  this.addLists.removeAt(index);
}
}
