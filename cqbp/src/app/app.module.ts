import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppLayoutModule } from './app-layout/app-layout.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // components, directives, pipes that belong to this module,
    // must declare every component in exactly one NgModule class
    AppComponent,
  ],
  imports: [
    BrowserModule, //browser specific services such as DOM rendering, sanitization, and location.
    AppRoutingModule,
    AppLayoutModule  // needed to access AppLayoutComponent in Routing module
  ],
  exports: [
    // declared classes are visible within the module but invisible to components 
    // in a other modules unless they are exported from this module 
    // and the other module imports this module.
  ],
  providers: [],
  bootstrap: [AppComponent]
  // LOH LOH LOH - Consider using this for login after successful Login API response
  // In a situation where you want to bootstrap a component based on an API response, 
  // or you want to mount the AppComponent in a different DOM node that doesn't match 
  // the component selector, please refer to ApplicationRef.bootstrap() documentation.
})
export class AppModule { }
