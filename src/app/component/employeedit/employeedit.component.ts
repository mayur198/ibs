import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
@Component({
  selector: 'app-employeedit',
  templateUrl: './employeedit.component.html',
  styleUrls: ['./employeedit.component.css']
})
export class EmployeeditComponent implements OnInit {
  empEditForm!: FormGroup;
  user: User = {
    name: '',
    email: '',
    mobile: 0,
    team: '',
    address: '',
    id: 0
  }
  employeeId: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<EmployeeditComponent>,
    private employeeservice: UserserviceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.employeeId = this.data.employeeId;
    this.loadEmployeeData();
 
    this.empEditForm = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]],
      email: [this.user.email, [Validators.required, Validators.email]],
      mobile: [this.user.mobile, [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]],
      team: [this.user.team, [Validators.required]],
      address: [this.user.address, [Validators.required]]
    });
  }

 

 

  get Name(): FormControl {
    return this.empEditForm.get("name") as FormControl;
  }
  get Email(): FormControl {
    return this.empEditForm.get("email") as FormControl;
  }
  get Mobile(): FormControl {
    return this.empEditForm.get("mobile") as FormControl;
  }



  loadEmployeeData(): void {
    this.employeeservice.employeedetilesbyId(this.employeeId).subscribe(
      (employee) => {
       
        this.empEditForm.patchValue(employee);
      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }


 
  
  updateRegister(data:any):void {
    if (this.empEditForm.valid) {
      const formData = this.empEditForm.value;
      
      this.employeeservice.updateEmployee(this.employeeId, formData).subscribe(
        (res) => {
          console.log('Employee updated successfully:', res);
       
          this.router.navigateByUrl('employeelist');
          this.dialogRef.close();
        },
        error => {
          console.error('Error updating employee:', error);
          
        }
      );
    } else {
      console.log('Form is invalid');
     
    }
  

  }}
