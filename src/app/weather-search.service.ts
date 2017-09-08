import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class WeatherSearchService {
  

  constructor(private http: Http) { }


  searchEntries(searchTerm:any) {
  	var api='http://api.apixu.com/v1/forecast.json?key=9591410d0a4945a2a01130103170609&q='+searchTerm+'&days=10'
    return this.http
        .get(api)
        .map(res => res.json());
  }

  save(data){
     var expressApi='http://localhost:8090/api/contact'
     return this.http.post(expressApi,data)
     .map((res: Response)=>res.json())
}
   
   favList(){
 var expressApi=('http://localhost:8090/api/contact')
     return this.http.get(expressApi)            
                     .map((res:Response)=>res.json())
}

delete(data:any) {
     return this.http.delete('http://localhost:8090/api/contact/'+data)
     .map(res=>res.json())
 }
}



