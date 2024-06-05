import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  registerEmployee(data:any){
    return this.http.post("http://localhost:3000/employee",data)
  }
  employeedetiles(){
    return this.http.get("http://localhost:3000/employee");

  }
  employeedetilesbyId(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/employee/${id}`);
  }

  deleteemployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/employee/${id}`);
  }
  updateEmployee(id: any, data: any) {
    return this.http.put(`http://localhost:3000/employee/${id}`, data);
  }
 
}
