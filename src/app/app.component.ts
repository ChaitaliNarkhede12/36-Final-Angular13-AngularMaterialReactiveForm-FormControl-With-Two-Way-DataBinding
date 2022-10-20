import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  employeeModel: EmployeeModel = new EmployeeModel();

  countryList: any[] = [];

  nameFormControl = new FormControl('');
  emailFormControl = new FormControl('');
  mobileNumberFormControl = new FormControl('');
  salaryFormControl = new FormControl(null);
  countryFormControl = new FormControl(null);

  //nameFormControl = new FormControl('', [Validators.required, Validators.maxLength(5)]);
  //emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  //mobileNumberFormControl = new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);
  //salaryFormControl = new FormControl(null, [Validators.required]);
  //countryFormControl = new FormControl(null, [Validators.required]);

  constructor() { }

  ngOnInit() {
    this.countryList = [
      { id: 0, name: "Select" },
      { id: 1, name: "India" },
      { id: 2, name: "US" },
      { id: 3, name: "UK" }
    ];

    //Set Value
    this.nameFormControl = new FormControl('', [Validators.required, Validators.maxLength(5)]);
    this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    this.mobileNumberFormControl = new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);
    this.salaryFormControl = new FormControl(null, [Validators.required]);
    this.countryFormControl = new FormControl(null, [Validators.required]);
  }

  OnSubmit() {

  }
}

export class EmployeeModel {
  public id: number;
  public name: string;
  public email: string;
  public mobileNumber: string;
  public salary: number;
  public country: string;
}
