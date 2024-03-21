import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-tasca',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './tasca.component.html',
  styleUrl: './tasca.component.css'
})
export class TascaComponent {

  constructor(private http: HttpClient) {

    this.http.get<any>("http://localhost:3030/llegirImatgesPujol").subscribe((chunk) => {
      console.log(chunk)
    })
    this.http.get<any>("http://localhost:3030/mostraNomsPujol").subscribe((chunk) => {
      console.log(chunk)
    })
    this.http.put<any>('http://localhost:3030/writeBuffersPujol', "hola").subscribe(() => {
      console.log("hola")
    })

  }

}
