import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  user: User = {
    name: '',
    email: '',
    mobile: 0,
    team: '', 
    address: '',
    id:0
  }

  constructor(private fb: FormBuilder,
    private router: Router,
    private dialogRef: MatDialogRef<RegisterComponent>,
    private employeeservice: UserserviceService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]],
      email: [this.user.email, [Validators.required, Validators.email]],
      mobile: [this.user.mobile, [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]],
      team: [this.user.team, [Validators.required]],
      address: [this.user.address, [Validators.required]]
    });
  }

  get Name(): FormControl {
    return this.registerForm.get("name") as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }
  get Mobile(): FormControl {
    return this.registerForm.get("mobile") as FormControl;
  }

  submitRegister(formData: any): void {
    if (this.registerForm.valid) {
      //console.log('Form Submitted!', formData);
      this.router.navigateByUrl('employeelist');
      this.employeeservice.registerEmployee(formData).subscribe(
        (res) => {
          //console.log('User registered successfully');

          this.registerForm.reset();
        },
        error => {
          //console.error('Error registering user:', error);
        }
      )
      this.dialogRef.close();
    } else {
      //console.log('Form is invalid');
    }
  }



}
