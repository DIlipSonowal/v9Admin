import { Component, OnInit,  NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { HomeService } from '../../services/home.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  files = ["","","",""]; filesCountry =[]; formArr: FormArray;
  final_files = ["","","",""];
  @ViewChild('autosize') autosize: CdkTextareaAutosize; visaIcon = [];
  header: any;
  constructor(private fb: FormBuilder, private _ngZone: NgZone, private hs:HomeService, private _snackBar: MatSnackBar) { }
  serviceForm = this.fb.group({
    header: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    description: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(300)]],
    family: this.fb.group({
      title: ["",[Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      para: ['',[Validators.required, Validators.minLength(50), Validators.maxLength(300)]],
      img: ['',[Validators.required]]
    }),
    work: this.fb.group({
      title: ["",[Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      para: ['',[Validators.required, Validators.minLength(50), Validators.maxLength(300)]],
      img: ['',[Validators.required]]
    }),
    study: this.fb.group({
      title: ["",[Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      para: ['',[Validators.required, Validators.minLength(50), Validators.maxLength(300)]],
      img: ['',[Validators.required]]
    }),
    visit: this.fb.group({
      title: ["",[Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      para: ['',[Validators.required, Validators.minLength(50), Validators.maxLength(300)]],
      img: ['',[Validators.required]]
    }),
    citizenship: this.fb.group({
      title: ["",[Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      para: ['',[Validators.required, Validators.minLength(50), Validators.maxLength(300)]],
      img: ['',[Validators.required]]
    }),
    other: this.fb.group({
      title: ["",[Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      para: ['',[Validators.required, Validators.minLength(50), Validators.maxLength(300)]],
      img: ['',[Validators.required]]
    })
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
  uploadFile(event, i) {
    this.files[i] = event[0].name;
    this.final_files[i] = event[0];
  }

  deleteAttachment(index, fg) {
    this.files[index] = "";
    this.final_files[index] = "";
    this.serviceForm.value[fg].img = "";
  }
  
  serviceSubmit(){
    //console.log('values', this.serviceForm.value);
    const formData = new FormData();
    for(let i=0; i< this.final_files.length; i++) {
      formData.append(`images`, this.final_files[i]);
    }
    formData.append('header', this.serviceForm.get('header').value);
    formData.append('sub_header', this.serviceForm.get('description').value);
    formData.append('family', JSON.stringify(this.serviceForm.value.family));
    formData.append('work', JSON.stringify(this.serviceForm.value.work));
    formData.append('study', JSON.stringify(this.serviceForm.value.study));
    formData.append('visit', JSON.stringify(this.serviceForm.value.visit));
    formData.append('citizenship', JSON.stringify(this.serviceForm.value.citizenship));
    formData.append('other', JSON.stringify(this.serviceForm.value.other));
    this.hs.immigrationService(formData).subscribe( (res:any)=>{
      this._snackBar.open(res.message, 'Close', {
        duration: 3000,
        verticalPosition :'top' 
      });
    });
  }
  resetForm(){
    this.serviceForm.reset();
  }
}
