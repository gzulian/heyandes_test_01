import { Component } from '@angular/core';
import { Sale } from './models/sale.model';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'heyandes_test_gzulian';
  sales:any;
  constructor(private FirebaseService: FirebaseService) { }
  ngOnInit(): void {
    
  }

  importSalesToFirestore():void {
    this.FirebaseService.readJsonData().subscribe( (res: any) => 
      res.forEach((element: Sale) => {
          this.FirebaseService.createSale(element)
      })
    );
  }

}
