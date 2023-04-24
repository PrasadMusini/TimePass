import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoComponent } from './components/demo/demo.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ValidationsComponent } from './components/validations/validations.component';
import { AddItemsComponent } from './components/add-items/add-items.component';
import { LoginJsonComponent } from './components/login-json/login-json.component';
import { UpdateProductComponent } from './components/add-items/update-product/update-product.component';
import { JsonSearchComponent } from './components/json-search/json-search.component';
import { LoginBackendComponent } from './components/login-backend/login-backend.component';
import { PetsAddedPetsjsonComponent } from './components/demo/pets-added-petsjson/pets-added-petsjson.component';
import { DemoDesignECOMComponent } from './components/demo/demo-design-ecom/demo-design-ecom.component';
import { SwitchCaseHeaderComponent } from './components/switch-case-header/switch-case-header.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ReactiveFormComponent,
    ValidationsComponent,
    AddItemsComponent,
    LoginJsonComponent,
    UpdateProductComponent,
    JsonSearchComponent,
    LoginBackendComponent,
    PetsAddedPetsjsonComponent,
    DemoDesignECOMComponent,
    SwitchCaseHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
