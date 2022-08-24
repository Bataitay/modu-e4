import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  employee = new Employee();
  id:any;
  data: any;
  constructor(private route:ActivatedRoute, private employeesService: EmployeesService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getEmployeesDataId();
  }
  getEmployeesDataId(){
    this.employeesService.getDataId(this.id).subscribe(res => {
      this.data = res;
      this.employee = this.data;
    })
    console.log(this.employeesService.getEmployeeId);
  }
  editEmployeesData(){
    this.employeesService.editDataId(this.id, this.employee).subscribe(res => {

    })
  }
}
