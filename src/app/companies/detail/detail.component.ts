import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private FirebaseService: FirebaseService) { }
  sales:any;
  companySelected:any;

  ngOnInit(): void {

    this.FirebaseService.selectCompany.subscribe((company) => {
      this.companySelected = company;
      this.FirebaseService.salesShare.subscribe((value) => {
        this.sales = value[company];
        //this.sales = Object.entries(this.sales); 
      });
    });

    
    
    console.log(this.sales);
  }

}
