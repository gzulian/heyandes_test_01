import { Component, OnInit } from '@angular/core';
import { Sale } from '../../models/sale.model';
import { FirebaseService } from '../../services/firebase.service';
@Component({
  selector: 'app-list-dashboard',
  templateUrl: './list-dashboard.component.html',
  styleUrls: ['./list-dashboard.component.css']
})
export class ListDashboardComponent implements OnInit {

  constructor(private FirebaseService: FirebaseService) { }
  sales:any;
  tableSalesData:any;

  ngOnInit(): void {
    
    this.FirebaseService.getAll().subscribe(res =>{
      this.sales = res.reduce( (saleObj,sale ={}) => {
        if (!saleObj[sale['nameAgency']]) {
          saleObj[sale['nameAgency']] = {};
          saleObj[sale['nameAgency']]['sales'] = [];
          saleObj[sale['nameAgency']]['total'] = 0;
        }
        saleObj[sale['nameAgency']]['sales'].push(sale);
        saleObj[sale['nameAgency']]['total'] += sale['finalPrice'];
        return saleObj;
      }, {});

      console.log(this.sales)

      this.FirebaseService.setSalesShare(this.sales);
      this.sales = Object.entries(this.sales); 

      
    });

  }
  ngAfterContentInit():void {
    console.log(this.sales)
    console.log("after")
  }

  selectCompany(company:string){
    this.FirebaseService.setSelectCompany(company);
  }

}
