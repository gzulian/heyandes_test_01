import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
@Component({
  selector: 'app-indicators-dashboard',
  templateUrl: './indicators-dashboard.component.html',
  styleUrls: ['./indicators-dashboard.component.css']
})
export class IndicatorsDashboardComponent implements OnInit {
  constructor(private FirebaseService: FirebaseService) { }
  sales:any;
  indicators = {company:0,month:""}

  ngOnInit(): void {
    this.FirebaseService.salesShare.subscribe(res =>{
      const salePre = Object.values(res);
      const totalArray = salePre.map( (company:any)  => {
        return company['total']
      });

      const monthArray = salePre.map( (company:any)  => {
        const months = company['sales'].map( (sale:any) => {
            const a  = sale['datePayment'].split("-");
            return a[1];
        });
        return months
      });
    
     

      this.indicators.company = Math.max(...totalArray)
      console.log(salePre);
    });
  }

}
