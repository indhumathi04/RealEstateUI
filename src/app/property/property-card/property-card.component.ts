import { Component, OnInit,Input } from '@angular/core';
import { Ipropertybase } from 'src/app/models/iproperty-base';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
@Input() property: Ipropertybase;

@Input() hideIcons: boolean;



  constructor() { }

  ngOnInit() {
  }

}
