import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LocationPipe } from '../../../common/location.pipe';
import IWorkshop from '../../models/IWorkshop';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-item',
  standalone: true,
  imports: [DatePipe, LocationPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input()
  workshop!: IWorkshop;
}
