// my-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

//populate markers & locations cards
export class LocationsDataService {
    private _locationsData = new BehaviorSubject<string>('initial value'); // Use BehaviorSubject for initial value and latest value on subscription
    public locationsData$: Observable<string> = this._locationsData.asObservable(); // Expose as Observable

    constructor() {
        this.loadInitialData()
    }

    updateMyVariable(newValue: string): void {
        this._locationsData.next(newValue); // Emit the new value
    }

    //
    loadInitialData() {
        //TODO:
    }
}