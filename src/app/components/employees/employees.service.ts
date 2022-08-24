import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  getAllEmployees = 'http://127.0.0.1:8000/api/index';
  storeEmployee = 'http://127.0.0.1:8000/api/store';
  deleteEmployee = 'http://127.0.0.1:8000/api/delete/';
  getEmployeeId = 'http://127.0.0.1:8000/api/show/';
  editEmployeeId = 'http://127.0.0.1:8000/api/update/';

  constructor(
    private http: HttpClient,
    ) { }
  getData() {
    return this.http.get<Employee[]>(this.getAllEmployees);
  }
  storeData( name: any,
    age: any,
    gender: any,
    salary: any,
    image: File): Observable<any>{
      var formData = new FormData();
      formData.append('name', name);
      formData.append('age', age);
      formData.append('gender', gender);
      formData.append('salary', salary);
      formData.append('image', image);
    return this.http.post<Employee[]>(this.storeEmployee, formData);
  }
  deleteData(id:any){
    return this.http.delete<Employee[]>(this.deleteEmployee +id);
  }
  getDataId(id: any){
    return this.http.get<Employee[]>(this.getEmployeeId +id);
  }
  editDataId(id: any,data: any){
    return this.http.put<Employee[]>(this.editEmployeeId +id, data);
  }
//   postFile(fileToUpload: File): Observable<boolean> {
//     const endpoint = 'your-destination-url';
//     const formData: FormData = new FormData();
//     formData.append('fileKey', fileToUpload, fileToUpload.name);
//     return this.http
//       .post(endpoint, formData, { headers: yourHeadersConfig })
//       .map(() => { return true; })
//       .catch((e) => this.handleError(e));
// }

}
