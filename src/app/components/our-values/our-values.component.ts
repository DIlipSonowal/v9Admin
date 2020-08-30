import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.scss']
})
export class OurValuesComponent implements OnInit {
   formArr: FormArray;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  header: any;
  constructor(private fb: FormBuilder, private _ngZone: NgZone, private hs:HomeService, private _snackBar: MatSnackBar) { }
   OurVauesForm = this.fb.group({
    header: ["",[Validators.required, Validators.minLength(50), Validators.maxLength(300)]],
    text_content: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    commitment: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    }),
    innovation: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    }),
    integrity: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    }),
    ownership: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    }),
    passion: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    }),
    perserverance: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    }),
    teamwork: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    }),
    transparency: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
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
    const formData = new FormData();
    formData.append('header', this.OurVauesForm.get('header').value);
    formData.append('text_content', this.OurVauesForm.get('sub_header').value);
    formData.append('immigration', JSON.stringify(this.OurVauesForm.value.commitment));
    formData.append('customer', JSON.stringify(this.OurVauesForm.value.innovation));
    formData.append('student', JSON.stringify(this.OurVauesForm.value.integrity));
    formData.append('country', JSON.stringify(this.OurVauesForm.value.ownership));
    formData.append('customer', JSON.stringify(this.OurVauesForm.value.passion));
    formData.append('student', JSON.stringify(this.OurVauesForm.value.perserverance));
    formData.append('country', JSON.stringify(this.OurVauesForm.value.teamwork));
    formData.append('country', JSON.stringify(this.OurVauesForm.value.transparency));
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
    this.OurVauesForm.reset();
  }
}
