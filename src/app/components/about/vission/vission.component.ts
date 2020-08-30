import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {FormControl} from '@angular/forms';
import { HomeService } from '../../../services/home.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-vission',
  templateUrl: './vission.component.html',
  styleUrls: ['./vission.component.scss']
})
export class VissionComponent implements OnInit {
  files = ""; final_file=""; listAdd: FormArray;
  serializedDate = new FormControl((new Date()).toISOString());
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  constructor(private fb: FormBuilder, private _ngZone: NgZone, private slider: HomeService, private _snackBar: MatSnackBar) { }
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
    const element = event[0];
    this.files = element.name;
    this.final_file = element;
}
saveTopSLider() {
  const formData = new FormData();
  formData.append('images', this.final_file);
  formData.append('header', this.vissionForm.get('header').value);
  formData.append('text_content', this.vissionForm.get('text_content').value);
  //console.log(this.vissionForm.value);
  this.slider.ourVission(formData).subscribe( (res:any) =>{
    this._snackBar.open(res.message, 'Close', {
      duration: 3000,
      verticalPosition :'top' 
    });
  });
}
resetForm(){
  this.vissionForm.reset();
  this.files = "";
  this.final_file = "";
}
}
