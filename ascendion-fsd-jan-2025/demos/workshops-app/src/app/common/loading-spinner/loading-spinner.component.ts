import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theme } from '../../models/utils';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss',
})
export class LoadingSpinnerComponent {
  @Input()
  variant!: Theme;
}
