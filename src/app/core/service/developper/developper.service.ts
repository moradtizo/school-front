import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Developper, Pagination, ResDevelopper, ResOneDevelopper } from '../../models/developper/developper';

@Injectable({
  providedIn: 'root',
})
export class DevelopperService {
  private readonly apiUrl =" http://localhost:4000/api/v1/developer"
 API_URL = 'http://localhost:4000/api/v1/developer';
constructor(private http:HttpClient){}
getAllDev(): Observable<ResDevelopper>{
  return this.http.get<ResDevelopper>(this.apiUrl)
}

gitOneD(id:number):Observable<ResOneDevelopper> {
  return this.http.get<ResOneDevelopper>(`${this.apiUrl}/${id}`)
}
gitOneDev(id:number):Observable<ResOneDevelopper>{
  return this.http.get<ResOneDevelopper>(`${this.apiUrl}/${id}`)
}


deleteD(id:string| undefined ){
  return this.http.delete(`${this.apiUrl}/${id}`)
}



getDevelopers(page: number, limit: number): Observable<{ developers: Developper[], pagination: Pagination }> {
  const url = `${this.API_URL}?page=${page}&limit=${limit}`;
  return this.http.get<{ developers: Developper[], pagination: Pagination }>(url);
}


updateDe(id: string, formData: FormData): Observable<ResOneDevelopper> {
  return this.http.put<ResOneDevelopper>(`${this.apiUrl}/${id}`,formData)
}

}
