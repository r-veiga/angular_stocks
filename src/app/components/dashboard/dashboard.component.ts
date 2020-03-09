import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface } from '../../services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  stocks: Array<StockInterface>;
  symbols: Array<string>;

  constructor(private service: StocksService) {
    console.log('LOG :: Constructor of DashboardComponent is called');
    console.log(this.service);
    this.symbols = service.get();
  }

  ngOnInit() {
    this.service.load(this.symbols)
      .subscribe(stocks => this.stocks = stocks);
  /*
    >> .subscribe << is not an Angular2 thing but a method from RxJS library which Angular is using internally.
    All AJAX calls in Angular use this library behind the scene.
    Use the method name, e.g get, and then call subscribe on it, because get returns and Observable.

    As well, <button (click)="doSomething()"> Angular uses Observables behind the scene
    and subscribes you to that source of thing, which in this case is a click event.
    . . .
    let subscription = magazineStore.getMagazines().subscribe(
       (newMagazine)=>{
             console.log('newMagazine',newMagazine);
        });
    . . .
    subscription.unsubscribe();

    There are 150~ rxjs methods.
*/
  }
}
