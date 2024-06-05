import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatModule } from './material/mat.module';
import { HeaderComponent } from './component/header/header.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { EmployeelistComponent } from './component/employeelist/employeelist.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeditComponent } from './component/employeedit/employeedit.component';
import { EmployeeshowComponent } from './component/employeeshow/employeeshow.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeelistComponent,
    HeaderComponent,
    RegisterComponent,
    EmployeeditComponent,
    EmployeeshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
