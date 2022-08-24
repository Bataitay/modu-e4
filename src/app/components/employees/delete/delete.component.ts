import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id:any;
  constructor(private employeesService: EmployeesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  }
  deleteEmployee() {
    this.employeesService.deleteData(this.id).subscribe(res => {
      let ref = document.getElementById('canel')
      ref?.click()
    }
    );
  }

}
