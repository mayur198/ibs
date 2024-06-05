import { Component, OnInit, inject } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { UserserviceService } from 'src/app/services/userservice.service';
import { EmployeeditComponent } from '../employeedit/employeedit.component';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EmployeeshowComponent } from '../employeeshow/employeeshow.component';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employees: any;
  id: any;
  data: any;
  employeeId: any;

  constructor(private router: Router,
    private dialog: MatDialog,
    private employeeservice: UserserviceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.employeedet()
  }
  register(): void {

    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '70%',

    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');

    });
  }

  employeedet() {
    this.employeeservice.employeedetiles().subscribe(res => {
      this.employees = res;
      //  console.log("this.employees",this.employees)
    })
  }




  editemployee(employeeId: any): void {
    const dialogRef = this.dialog.open(EmployeeditComponent, {
      width: '70%',
      data: { employeeId }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }



  deleteemp(id: any) {
    this.employeeservice.deleteemployee(id).subscribe({
      next: (res) => {
        alert("Employee Deleted");
      }
    })
  }

  showemployee(employeeId: any): void {
    const dialogRef = this.dialog.open(EmployeeshowComponent, {
      width: '60%',
      data: { employeeId }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }


}
