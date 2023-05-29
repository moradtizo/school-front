
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RegisterD } from '../../models/developper/registerDev';
import { AddDevelopper, Developper } from '../../models/developper/developper';


@Injectable({
  providedIn: 'root',
})
export class RegisterDev {
  private readonly apiUrl ="http://localhost:4000/api/v1/users/register"
  private readonly apiUser ="http://localhost:4000/api/v1/users"
  private readonly Url ="http://localhost:4000/api/v1/developer/complete-registration"
constructor(private http:HttpClient){}
// getAllDev(): Observable<ResDevelopper>{
//   console.log();

//   return this.http.get<ResDevelopper>(this.apiUrl)

// }
register(data:RegisterD){
  return this.http.post<RegisterD>(this.apiUrl,data);
}
getUser(data:any){
  return this.http.get<any>(this.apiUser,data);
}


registrationCom(formData:FormData,uuid:any):Observable<AddDevelopper>{
  const url = `http://localhost:4000/api/v1/developer/complete-registration/${uuid}`;
  return this.http.post<AddDevelopper>(url, formData);
}
// gitOneD(id:number) {
//   return this.http.post<Developper>(`${this.Url}/complete-registration/${id}`)
// }
// postProduct(formData:FormData,uuid:any):Observable<Developper>{
//   return this.http.post<Developper>(this.apiUrl,formData,uuid);
// }





}
