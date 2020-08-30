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
    header: ["",[Validators.required, Validators.minLength(5), Validators.maxLength(300)]],
    sub_header: ["",[Validators.required, Validators.minLength(30), Validators.maxLength(3000)]],
    commitment: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(500)]],
    }),
    innovation: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(500)]],
    }),
    integrity: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(500)]],
    }),
    ownership: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(500)]],
    }),
    passion: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(500)]],
    }),
    perserverance: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(500)]],
    }),
    teamwork: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(500)]],
    }),
    transparency: this.fb.group({
      title1: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(500)]],
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
    this.hs.ourValues(this.OurVauesForm.value).subscribe( (res:any) =>{
      this._snackBar.open(res.message, 'Close', {
        duration: 3000,
        verticalPosition :'top' 
      });
    });
    //console.log(this.OurVauesForm.value.transparency);
  }
  resetForm(){
    this.OurVauesForm.reset();
  }
}