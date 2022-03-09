import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') AddPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  fornishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  directionTypes: Array<string> = ['East', 'West', 'South', 'North'];


  constructor(private router: Router) { }

  ngOnInit() {

  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){

    console.log(this.AddPropertyForm);
  }
  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

}
