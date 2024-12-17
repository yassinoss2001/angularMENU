import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {

  @Input() control!: AbstractControl | NgModel;
}
