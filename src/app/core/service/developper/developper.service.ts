import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Developper, ResDevelopper } from '../../models/developper/developper';

@Injectable({
  providedIn: 'root',
})
export class DevelopperService {
  private readonly apiUrl =" http://localhost:4000/api/v1/developer"

constructor(private http:HttpClient){}
getAllDev(): Observable<ResDevelopper>{
  return this.http.get<ResDevelopper>(this.apiUrl)

}

gitOneD(id:number) {
  return this.http.get(`${this.apiUrl}/${id}`)
}


deleteD(id:string| undefined ){
  return this.http.delete(`${this.apiUrl}/${id}`)
}

}
