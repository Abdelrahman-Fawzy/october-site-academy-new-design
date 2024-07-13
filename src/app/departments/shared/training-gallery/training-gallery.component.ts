import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-gallery',
  templateUrl: './training-gallery.component.html',
  styleUrls: ['./training-gallery.component.scss']
})
export class TrainingGalleryComponent implements OnInit {

  @Input() imagesList: []

  constructor() { }

  ngOnInit(): void {
  }

}
