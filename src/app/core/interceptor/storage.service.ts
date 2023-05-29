import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly APP_TOKEN = 'app_token'

  token$= new BehaviorSubject<string | null>(this.gettoken());

  setTtoken(data: string|null){
    this.token$.next(data);
  }

  setToken(data:string){
    localStorage.setItem(this.APP_TOKEN,data)
  }
  gettoken(){
    return localStorage.getItem(this.APP_TOKEN)

  }
  removeToken(){
    localStorage.removeItem(this.APP_TOKEN)

  }
  expiredToken(expiration:number){
    return Math.floor(new Date().getTime()/ 1000)>= expiration
  }

}
