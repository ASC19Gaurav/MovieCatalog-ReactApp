
# Fading Between Route Transitions in Angular

To create a fade effect between page components during route transitions in Angular, you can use the `@angular/animations` library with route transition animations.

## Steps to Implement Route Transition Animations

### 1. Import Angular Animations
Ensure that `BrowserAnimationsModule` is imported in the main application module.

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule],
})
export class AppModule {}
```

### 2. Define the Route Transition Animation

Define an animation trigger with transitions that fade out the current page and fade in the new page. Use the `:enter` and `:leave` states to control the fade effects.

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':leave', [
          style({ opacity: 1 }),
          animate('300ms ease-out', style({ opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          animate('300ms ease-out', style({ opacity: 1 }))
        ], { optional: true })
      ])
    ]),
  ]
})
export class AppComponent {}
```

### 3. Apply the Animation to `RouterOutlet`

In the main application template (`app.component.html`), bind the animation trigger to `RouterOutlet`:

```html
<main [@routeAnimations]="getRouteAnimationState(outlet)">
  <router-outlet #outlet="outlet"></router-outlet>
</main>
```

### 4. Define `getRouteAnimationState` to Trigger Animation

In `AppComponent`, define a method to return a unique value for each route, allowing Angular to detect route changes and trigger animations.

```typescript
getRouteAnimationState(outlet: RouterOutlet): string {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}
```

### 5. Configure Route Data for Animation

In your route configuration, add an `animation` property to each route’s `data`.

```typescript
export const routes: Routes = [
  {
    path: 'page-one',
    component: PageOneComponent,
    data: { animation: 'PageOne' }
  },
  {
    path: 'page-two',
    component: PageTwoComponent,
    data: { animation: 'PageTwo' }
  },
];
```

This setup creates smooth fade transitions between pages whenever the route changes.
