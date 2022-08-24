import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {
  fileToUpload:any ;
  submitted:boolean = false;
  profileForm !: FormGroup;
  data:any;
  employee=[];

  constructor(
    private employeesService: EmployeesService,
    private toastrService: ToastrService,
    private fb: FormBuilder,
    private _Router:Router
    ) { }

    ngOnInit(): void {
      this.profileForm = this.fb.group({
        name: [''],
        age: [''],
        gender: [''],
        salary: [''],
        image: [null],
      });
  }
  uploadImageEmployee(event:any) {
    const file = event.target.files ? event.target.files[0] : '';
    this.profileForm.patchValue({
      image:file
    });
    this.profileForm.get('image')?.updateValueAndValidity();
    console.log(file);
  }
  storeEmployeesData() {
    // const formData = new FormData();
    // formData.append('file', this.profileForm.get('fileSource').value);
    // let formData = this.profileForm;

    let employee: Employee = {
      name: this.profileForm.value.name,
      age: this.profileForm.value.age,
      gender: this.profileForm.value.gender,
      salary: this.profileForm.value.salary,
      image: this.profileForm.value.image
    }
    console.log(employee);
    this.employeesService.storeData( this.profileForm.value.name,
       this.profileForm.value.age,
      this.profileForm.value.gender,
      this.profileForm.value.salary,
      this.profileForm.value.image).subscribe(res => {
      this.data = res;
      console.log(this.data.status);
      this.profileForm.reset();
      this._Router.navigate(['/']);
      if(this.data.status == true){
        this.toastrService.success(JSON.stringify(this.data.message), '',{
          timeOut:2000,
          progressBar: true
        })
      }else if(this.data.status == false){
        this.toastrService.success(JSON.stringify(this.data.message), '',{
          timeOut:2000,
          progressBar: true
        })
      }
    })
  }



}
