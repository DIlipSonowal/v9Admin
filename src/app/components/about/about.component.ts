import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  files = [];
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  constructor(private fb: FormBuilder, private _ngZone: NgZone, private hs:HomeService) { }

  ngOnInit(): void {
  }
  aboutForm = this.fb.group({
    header: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    sub_header: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
    text_content: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(1000)]],
  });

  public onChange( { editor }: ChangeEvent ) {
      const data = editor.getData();
      console.log( data );
  }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  saveAbout(){
    this.hs.aboutSection(this.aboutForm.value).subscribe( res=>{
      console.log(res);
    });
    // console.log(this.aboutForm.value);
  }
}
