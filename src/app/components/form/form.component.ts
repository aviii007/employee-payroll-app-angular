import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public employee: Employee = new Employee();
  employeeFormGroup: FormGroup;

  /**
  * Array of objects to store departments
  */
   departments: Array<any> = [
     {
       id: 1,
       name: "HR",
       value: "HR",
     },
     {
       id: 2,
       name: "Sales",
       value: "Sales",

     },
     {
       id: 3,
       name: "Finance",
       value: "Finance",

     },
     {
       id: 4,
       name: "Engineer",
       value: "Engineer",

     },
     {
       id: 5,
       name: "Other",
       value: "Other",

     }
   ]

   constructor(private formBuilder: FormBuilder,) {
     this.employeeFormGroup = this.formBuilder.group({
       name: new FormControl(''),
       profilePic: new FormControl(''),
       gender: new FormControl(''),
       department: this.formBuilder.array([], [Validators.required]),
       salary: new FormControl(''),
       startDate: new FormControl(''),
       note: new FormControl('') 
     })
   }

  

  ngOnInit(): void {
    console.log(this.employee);
    
  }

  

  onSubmit() {
    this.employee = this.employeeFormGroup.value;
    console.log(this.employeeFormGroup);
    console.log(this.employee);

}
}