import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Ipropertybase } from 'src/app/models/iproperty-base';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent=1;
  Property: Array<Ipropertybase> ;
  constructor(private route:ActivatedRoute, private housingService:HousingService) { }

  ngOnInit() {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2;
    }
 this.housingService.getAllProperties(this.SellRent).subscribe(
  data=>{
    this.Property=data;
    console.log(data);
    console.log(this.route.snapshot.url.toString())
  },
  error =>{
    console.log(error);
  }
 )
}

}
