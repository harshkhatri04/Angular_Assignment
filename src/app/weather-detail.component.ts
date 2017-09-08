import { Component, OnInit,Input } from '@angular/core';
import { AppComponent } from './app.component'
import { WeatherSearchService } from './weather-search.service';
import 'rxjs/add/operator/map';@Component({
 selector: 'app-channel',
 templateUrl: './weather-detail.component.html',
 styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent { 

  constructor(private weatherSearchService:WeatherSearchService) { } 
  @Input('results') results:any; 
   
   data:any={};

    saveData(data){
         console.log(data)
         this.data={
         "name":data.name,
         "date":data.date,
         "maxtemp":data.day.maxtemp_c,
         "mintemp":data.day.mintemp_c
         
         };
         this.weatherSearchService.save(this.data).subscribe((data:any)=>{
         console.log(data);
         })
 }



         /* favour(){
          this.weatherSearchService.favour().subscribe((data)=>{
            console.log(data);
            this.data=data;
    
          });
        }*/
   
}