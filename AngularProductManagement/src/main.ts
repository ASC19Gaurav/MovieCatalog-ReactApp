import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';  // To import providers
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule)]  // Provide HttpClientModule globally
})
.catch(err => console.error(err));