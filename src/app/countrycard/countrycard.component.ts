import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryServiceService } from '../country-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-countrycard',
  templateUrl: './countrycard.component.html',
  styleUrls: ['./countrycard.component.css']
})
export class CountrycardComponent implements OnInit {

  countryID: number

  constructor(
    private route: ActivatedRoute,
    private service: CountryServiceService,
    private _location: Location

  ) { }

  ngOnInit(): void {
    //alert('aa')
    this.route.params.subscribe(params => {
      console.log(params);
      console.log("scheduler params", params['id']);
      this.countryID = params['id'];
  });
  if (this.countryID)
    this.getCountryId(this.countryID);
  }
  countryDetails : any
  str: any
  getCountryId(id) {
    //alert('bbb')
    this.service.getById(id).subscribe((response: any) => {
        this.countryDetails = response[0]
        console.log('countryDetails', this.countryDetails.languages)
        this.str = this.countryDetails.languages.map(function(elem){
                    return elem.name;
                }).join(",");
                console.log('namessss: ', this.str)

    })
}
backClicked() {
  this._location.back();
}

}
