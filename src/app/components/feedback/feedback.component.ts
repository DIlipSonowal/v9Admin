import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  files = []; filesCountry =[];formArr: FormArray;  final_files = [];
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  header: any;
  constructor(private fb: FormBuilder, private _ngZone: NgZone, private hs:HomeService, private _snackBar: MatSnackBar) { }
   feedbackForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      para: ['',[Validators.required, Validators.minLength(50), Validators.maxLength(500)]],
      icon: ['',[Validators.required]]
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
    //console.log('events', event);
      this.files[0] = event[0].name;
      this.final_files[0] = event[0];
  }

  deleteAttachment() {
    this.files[0] = "";
    this.final_files[0] = "";
    this.feedbackForm.get('icon').setValue('');
  }

  dynamicHeader():FormArray {
    return  this.formArr = this.feedbackForm.controls.icons as FormArray;
  }
  serviceSubmit(){
    // console.log('values', this.feedbackForm.value);
    const formData = new FormData();
    formData.append(`images`, this.final_files[0]);
    formData.append('header', this.feedbackForm.get('name').value);
    formData.append('sub_header', this.feedbackForm.get('para').value);
    this.hs.feedBack(formData).subscribe( (res:any)=>{
      this._snackBar.open(res.message, 'Close', {
        duration: 3000,
        verticalPosition :'top' 
      });
    });
  }
  resetForm(){
    this.feedbackForm.reset();
  }
}
