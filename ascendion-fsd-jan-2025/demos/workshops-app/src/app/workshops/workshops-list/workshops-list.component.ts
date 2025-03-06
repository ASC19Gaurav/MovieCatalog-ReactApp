import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoadingSpinnerComponent } from '../../common/loading-spinner/loading-spinner.component';
import { ErrorAlertComponent } from '../../common/error-alert/error-alert.component';
import { PaginationComponent } from '../../common/pagination/pagination.component';
import { ItemComponent } from './item/item.component';
import { WorkshopsService } from '../workshops.service';
import IWorkshop from '../models/IWorkshop';

@Component({
  selector: 'app-workshops-list',
  standalone: true,
  imports: [
    LoadingSpinnerComponent,
    ErrorAlertComponent,
    PaginationComponent,
    ItemComponent,
  ],
  templateUrl: './workshops-list.component.html',
  styleUrl: './workshops-list.component.scss',
})
export class WorkshopsListComponent implements OnInit {
  loading = true;
  error: Error | null = null;
  workshops!: IWorkshop[];
  page = 1;

  // private ws: WorkshopsService;

  // constructor(ws: WorkshopsService) {
  //   this.ws = ws;

  //   console.log(this.ws);
  // }

  // Dependency Injection (DI)
  constructor(
    private ws: WorkshopsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  getWorkshops() {
    this.loading = true;
    console.log(this.ws);

    this.ws.getWorkshops(this.page).subscribe({
      // success
      next: (data) => {
        this.workshops = data;
        this.loading = false;
      },

      // error
      error: (err) => {
        this.error = err;
        this.loading = false;
      },
    });
  }

  // LIFECYCLE METHOD OF COMPONENT
  public ngOnInit() {
    // this.getWorkshops();

    // this.activatedRoute.queryParamMap is an Observable that tracks changes to the query string -> thus whenever `page` in the query string changes, the next() method is called
    this.activatedRoute.queryParamMap.subscribe({
      next: (queryParams) => {
          const queryStr = queryParams.get('page');

          // when the page loads for the first time, there is no `page` query string parameter -> so we set page to 1. Later on there is some `page` value
          if (queryStr === null) {
              this.page = 1;
          } else {
              this.page = +queryStr; // convert `page` from string type to number
          }

          this.getWorkshops(); // page has changed -> get fresh data
      },
  });
  }

  // Just before the component is removed from DOM
  ngOnDestroy() {}

  changePage(newPage: number) {
    this.page = newPage;

    // this.getWorkshops();

    // set the query string in the route
    this.router.navigate(['/workshops'], {
      queryParams: {
        page: this.page,
      },
    });
  }
}
