import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection }  from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Sale } from '../models/sale.model';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private dbPath = '/sales';
  salesRef: AngularFirestoreCollection<any>;

  salesShare = new BehaviorSubject<any>({});
  selectCompany = new BehaviorSubject<string>("");
  constructor(private db: AngularFirestore , private httpService:HttpClient) {
    this.salesRef = db.collection(this.dbPath);
  }

  readJsonData(){
    return this.httpService.get("../../assets/data/sales.json");
  }

  getAll(){
    return this.salesRef.valueChanges()
  }
  createSale(sale: Sale): any {
    return this.salesRef.add({ ...sale });
  }

  setSalesShare(sales:any) {
    this.salesShare.next(sales);
  }

  setSelectCompany(company:string) {
    this.selectCompany.next(company);
  }
  
}
