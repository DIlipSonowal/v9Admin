import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.scss']
})
export class ChooseUsComponent implements OnInit {
  files = ["","","",""]; filesCountry =[];formArr: FormArray;
  final_files = ["","","",""];
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  header: any;
  constructor(private fb: FormBuilder, private _ngZone: NgZone, private hs:HomeService, private _snackBar: MatSnackBar) { }
   taskForm = this.fb.group({
    header: ["",[Validators.required, Validators.minLength(50), Validators.maxLength(300)]],
    sub_header: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    immigration: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      count: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(11)]],
      title2: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      icon: ['',[Validators.required]]
    }),
    customer: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      count: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(11)]],
      title2: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      icon: ['',[Validators.required]]
    }),
    student: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      count: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(11)]],
      title2: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      icon: ['',[Validators.required]]
    }),
    country: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      count: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(11)]],
      title2: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      icon: ['',[Validators.required]]
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
  uploadFile(event, i) {
      this.files[i] = event[0].name;
      this.final_files[i] = event[0];
  }
  deleteAttachment(index, fg) {
    this.files[index] = "";
    this.final_files[index] = "";
    this.taskForm.value[fg].icon = "";
    //console.log("==>",this.taskForm.value[fg].icon);
  }
   dynamicHeader():FormArray {
   return  this.formArr = this.taskForm.controls.icons as FormArray;
  }
  serviceSubmit(){
    const formData = new FormData();
    for(let i=0; i< this.final_files.length; i++) {
      formData.append(`images`, this.final_files[i]);
    }
    formData.append('header', this.taskForm.get('header').value);
    formData.append('sub_header', this.taskForm.get('sub_header').value);
    formData.append('immigration', JSON.stringify(this.taskForm.value.immigration));
    formData.append('customer', JSON.stringify(this.taskForm.value.customer));
    formData.append('student', JSON.stringify(this.taskForm.value.student));
    formData.append('country', JSON.stringify(this.taskForm.value.country));
    this.hs.whychooseus(formData).subscribe( (res:any) =>{
      //console.log(res);
      let message;
      if(res.success.length){ 
        message = res.success[0];
      } else{
        message = res.error[0];
      }
      this._snackBar.open(message, 'Close', {
        duration: 2000
      });
    });
    //console.log(formData);
  }
  resetForm(){
    this.taskForm.reset();
  }
}
