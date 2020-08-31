import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { HomeService } from '../../services/home.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ceo',
  templateUrl: './ceo.component.html',
  styleUrls: ['./ceo.component.scss']
})
export class CeoComponent implements OnInit {
  file = "";
  final_file = "";
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  constructor(private fb: FormBuilder, private _ngZone: NgZone, private slider: HomeService, private _snackBar: MatSnackBar) { }
  ceoForm = this.fb.group({
    header: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(1000)]],
    name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    sub_title: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(300)]],
    text_content:['', [Validators.required, Validators.minLength(50), Validators.maxLength(5000)]],
    files: ['', [Validators.required]]
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
    this.file = element.name;
    this.final_file = element;
  }
  deleteAttachment() {
    this.file = "";
    this.final_file = "";
  }

  saveForm() {
    const formData = new FormData();
    formData.append(`images`, this.final_file);
    formData.append('header', this.ceoForm.get('header').value);
    formData.append('name', this.ceoForm.get('name').value);
    formData.append('sub_header', this.ceoForm.get('sub_title').value);
    formData.append('text_content', this.ceoForm.get('text_content').value);
    //console.log(this.ceoForm.value);
    this.slider.aboutCeo(formData).subscribe( (res:any) =>{
      this._snackBar.open(res.message, 'Close', {
        duration: 3000,
        verticalPosition :'top' 
      });
    });
  }
}