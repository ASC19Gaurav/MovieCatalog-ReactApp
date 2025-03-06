
# Animating Deletion of an Item in an Angular List

To animate an item being deleted from a list in Angular, we can use Angular’s `@angular/animations` library to apply a fade-out animation to the deleted item and a smooth rearrangement of the remaining items.

## Setup Instructions

### 1. Import Angular Animations
Make sure to import the `BrowserAnimationsModule` in your main application module.

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule],
  // other configurations
})
export class AppModule {}
```

### 2. Define an Animation Trigger for Fade-Out
Define an animation trigger in the component that contains the list. This trigger will handle the fade-out effect for the item being removed.

```typescript
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-workshop-list',
  templateUrl: './workshop-list.component.html',
  animations: [
    trigger('fadeSlideOut', [
      transition(':leave', [
        animate(
          '300ms ease-out',
          style({
            opacity: 0,
            transform: 'scale(0.9)',
          })
        ),
      ]),
    ]),
  ],
})
export class WorkshopListComponent {
  filterable = {
    filteredArray: () => [
      /* Array of workshops with unique `id`s */
    ],
  };

  confirmAndDeleteWorkshop(workshop: any) {
    // Remove the item from the array
    this.filterable.filteredArray = this.filterable.filteredArray.filter(
      (w) => w.id !== workshop.id
    );
  }
}
```

### 3. Apply the Trigger in the Template
Add the `@fadeSlideOut` trigger to the item component in the HTML template.

```html
<div class="row">
  <div
    class="col-12 col-md-4 col-xl-3 my-3 d-flex"
    *ngFor="let workshop of filterable.filteredArray(); trackBy: trackByWorkshopId"
    @fadeSlideOut
  >
    <app-workshop-item
      [workshop]="workshop"
      (delete)="confirmAndDeleteWorkshop(workshop)"
    ></app-workshop-item>
  </div>
</div>
```

### 4. Define a `trackBy` Function (Optional)
Using a `trackBy` function helps improve performance by helping Angular identify which elements need to be removed or re-rendered.

```typescript
trackByWorkshopId(index: number, workshop: any): any {
  return workshop.id;
}
```

This approach uses Angular animations to achieve a fade-out effect for the deleted item and reorders the remaining items within the grid layout smoothly.

---
