import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CountryServiceService } from "../country-service.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CountryServiceService]

})
export class CardComponent implements OnInit {
  startsWithPipe
  query
  cards = []
  constructor(    
    private http: HttpClient,
    private service: CountryServiceService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.http.get<any>('https://restcountries.eu/rest/v2/all').subscribe(
      data => this.cards = data,
      error => console.error('There was an error!', error)
    )
  }

  getCountry(id) {
    this.service.getById(id).subscribe(res => {
      console.log('country code', res)
      this.router.navigate(['/countrycard/' + id])
    })
  }

}
