import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {TabsetComponent} from 'ngx-bootstrap/tabs'
import { Ipropertybase } from 'src/app/models/iproperty-base';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(private router:Router) { }

  propertyTypes: Array<string> = ['House','Apartment','Duplex']

  furnishTypes: Array<string> = ['Fully','Semi','Unfurnished']

  propertyView:Ipropertybase={
    Id:null,
    Name: '',
    Price: null,
    SellRent: null,
    PType:null,
    FType:null,
    BHK:null,
    BuiltArea: null,
    City: null,
    RTM: null
  };
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
  ngOnInit(): void {
  }
  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(form:NgForm){
    console.log(form.value);
  }

}
