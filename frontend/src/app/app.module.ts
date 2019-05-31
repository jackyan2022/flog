import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbdAccordionBasic } from './Accordion/accordion.basic';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { ArticleEditComponent } from './ArticleEdit/article-edit/article-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbdAccordionBasic,
    NavbarComponent,
    ArticleEditComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
