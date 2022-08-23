import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo-comp',
  templateUrl: './demo-comp.component.html',
  styleUrls: ['./demo-comp.component.css'],
})
export class DemoCompComponent implements OnInit {
  @Input() ddn: number;

  constructor() {}

  ngOnInit() {}

  fileToUpload: any;
  imageUrl: any;
  handleFileInput(e: Event) {
    let uploadedFile = (<HTMLInputElement>e.target).files;
    this.fileToUpload = uploadedFile.item(0);

    //Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
}
