import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-employeeshow',
  templateUrl: './employeeshow.component.html',
  styleUrls: ['./employeeshow.component.css']
})
export class EmployeeshowComponent implements OnInit {
  employeeId: any;
  showdata: any;

  constructor(private dialogRef: MatDialogRef<EmployeeshowComponent>,
    private employeeservice: UserserviceService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.employeeId = this.data.employeeId;
    this.loadEmployeeData();
  }

  loadEmployeeData(): void {
    this.employeeservice.employeedetilesbyId(this.employeeId).subscribe(res => {

      this.showdata = res
     
      console.log(" this.showdata ", this.showdata )
      

    });
  }

}
