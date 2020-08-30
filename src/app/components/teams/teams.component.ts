import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { HomeService } from '../../services/home.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  files = "";
  final_files = "";
  constructor(private fb: FormBuilder, private hs:HomeService, private _snackBar: MatSnackBar) { }

  teamsForm = this.fb.group({
    img: ["",[Validators.required]]
  });

  ngOnInit(): void {
  }

  uploadFile(event) {
    this.files = event[0].name;
    this.final_files = event[0];
  }

  deleteAttachment() {
    this.files = "";
    this.final_files = "";
    this.teamsForm.reset();
  }

  teamsSubmit(){
    const formData = new FormData();
    formData.append('images', this.final_files);
    this.hs.teamsPhoto(formData).subscribe((res:any)=>{
      this._snackBar.open(res.message, 'Close', {
        duration: 3000,
        verticalPosition :'top' 
      });
    });
  }
}
