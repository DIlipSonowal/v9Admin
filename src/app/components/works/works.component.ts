import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { HomeService } from '../../services/home.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  files = []; filesCountry =[];formArr: FormArray;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  header: any;
  constructor(private fb: FormBuilder, private _ngZone: NgZone, private hs:HomeService, private _snackBar: MatSnackBar) { }
   worksForms = this.fb.group({
    header: ["",[Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    sub_header: ["",[Validators.required, Validators.minLength(10), Validators.maxLength(300)]],
    discussion: this.fb.group({
      title: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      count: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
      para: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(120)]]
    }),
    documentation: this.fb.group({
      title: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      count: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
      para: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(120)]]
    }),
    submission: this.fb.group({
      title: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      count: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
      para: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(120)]]
    }),
  });

  public onChange( { editor }: ChangeEvent ) {
      const data = editor.getData();
     // console.log( data );
  }

  ngOnInit(): void {
  }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  serviceSubmit(){
    //console.log('values', this.worksForms.value);
    this.hs.howitworks(this.worksForms.value).subscribe( (res:any)=>{
      this._snackBar.open(res.message, 'Close', {
        duration: 3000,
        verticalPosition :'top' 
      });
    });
  }
  resetForm(){
    this.worksForms.reset();
  }
}
