import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient){}
  login(){
    window.location.assign(
      'https://auth.htoenjes.dev/login?callbackUrl=http://localhost:4200'
    )
  }
  call(){
    this.http.get<any>('https://auth.htoenjes.dev/api/session',{
      withCredentials: true,
    }).subscribe({next: (data)=> {console.log(data);}, 
    error:(error) => console.error("there is an error", error)
  },)}
}
