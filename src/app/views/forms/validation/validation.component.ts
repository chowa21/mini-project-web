import { IconDirective } from '@coreui/icons-angular';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import {
  RowComponent,
  ColComponent,
  TextColorDirective,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormDirective,
  FormLabelDirective,
  FormControlDirective,
  FormFeedbackComponent,
  InputGroupComponent,
  InputGroupTextDirective,
  FormSelectDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  ButtonDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  CardModule,
  FormModule,
  GridModule,
} from '@coreui/angular';
import {
  DxButtonModule,
  DxDataGridModule,
  DxFormModule,
  DxPopupModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { style } from '@angular/animations';



import { ViewChild, ElementRef } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ObjectDetector } from '@mediapipe/tasks-vision';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
  standalone: true,
  imports: [
    DxDataGridModule,
    DxFormModule,
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    DocsExampleComponent,
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    FormFeedbackComponent,
    InputGroupComponent,
    InputGroupTextDirective,
    FormSelectDirective,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    ButtonDirective,
    ListGroupDirective,
    ListGroupItemDirective,
    HttpClientModule,
    DxButtonModule,
    DxPopupModule,
    DxSelectBoxModule,
    CardModule,FormModule,NgStyle,
    GridModule
  ],
})

export class ValidationComponent implements OnInit {

  

  constructor(private route: Router, private http: HttpClient) { }
  ngOnInit(): void {
   

  }

  go = {
    ObjectDetections: () => {
      window.open('https://codepen.io/Sorrajin/full/zYgBrqv', '_blank');
    },

    ImageSegmentation : () => {
      window.open('https://codepen.io/Sorrajin/full/vYoKLar', '_blank');
    },

    InteractiveSegmentation :() => {
      window.open('https://codepen.io/Sorrajin/full/BaXzjPb', '_blank');

    },

    HandLandmarksDetection:()=>{
      window.open('https://codepen.io/Sorrajin/full/ZEgOQMW', '_blank');

    },
    PoseDetection:() => {
      window.open('https://codepen.io/Sorrajin/full/XWvKXPN', '_blank');

    },
    aboutUs:() => {
    this.route.navigate(['/forms/checks-radios'])  
    }
    
  };

}








