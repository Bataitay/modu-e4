import { Component, OnInit, Input } from '@angular/core';
import { Employee } from './employee';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];
  employee = new Employee();
  constructor(private employeesService: EmployeesService,) { }

  ngOnInit(): void {
    this.getEmployeesData();

  }
  getEmployeesData() {
    this.employeesService.getData().subscribe(res => {
      this.employees = res
      console.log(this.employees);
    });
  }
  deleteEmployee(id: any) {
    this.employeesService.deleteData(id).subscribe(res => {
      this.getEmployeesData();
      let ref = document.getElementById('canel')
      ref?.click()
    }
    );
  }


}
