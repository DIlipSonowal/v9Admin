import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  files: any = []; query = '';
  homeForm = this.fb.group({
    header: [""],
    subHeader: [""],
    files: ['']
  })
  constructor(private fb: FormBuilder,) { }
  ngOnInit(): void {
  }


  uploadFile(event) {
    console.log('events', event);
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }
  searchItem(e){

  }
 search(){}
}
