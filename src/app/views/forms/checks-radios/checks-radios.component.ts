import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  UntypedFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import {
  RowComponent,
  FormDirective,
  ColComponent,
  TextColorDirective,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  ButtonGroupComponent,
  ButtonDirective,
  GridModule,
} from '@coreui/angular';
import {
  DxDataGridModule,
  DxFormModule,
  DxPopupModule,
} from 'devextreme-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import dxPopup from 'devextreme/ui/popup';

@Component({
  selector: 'app-checks-radios',
  templateUrl: './checks-radios.component.html',
  styleUrls: ['./checks-radios.component.scss'],
  standalone: true,
  imports: [
    DxFormModule,
    RowComponent,
    ReactiveFormsModule,
    FormDirective,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    DocsExampleComponent,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    ButtonGroupComponent,
    ButtonDirective,
    HttpClientModule,
    DxDataGridModule,
    DxPopupModule,GridModule
  ],
})
export class ChecksRadiosComponent implements OnInit {

  constructor(private http: HttpClient) {}

 
  ngOnInit(): void {
   
  }

 

}
