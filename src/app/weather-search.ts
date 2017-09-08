import { Component,EventEmitter,Output,OnInit } from '@angular/core';
import { WeatherSearchService } from './weather-search.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css'],
  providers: [WeatherSearchService]
})
export class WeatherSearchComponent implements OnInit{

  results: Object;
    list :any =[];
    data :any = [];

  @Output() receive= new EventEmitter<any>();
  

  constructor(private weatherSearchService: WeatherSearchService) {}


  getDetails(searchTerm:any){
    //alert(searchTerm.value

    this.weatherSearchService.searchEntries(searchTerm.value)
      .subscribe(results => {
        this.results = results;
        console.log(this.results)
        this.receive.emit(this.results)
      });
  }

   
   getFavoritesList(){

   this.weatherSearchService.favList()
        .subscribe((data)=>{
          this.list=data;
        })

 }

    delete(data:any) {
   this.weatherSearchService.delete(data)
   .subscribe(res=>{
     this.data=res
     console.log(this.data)
   })
 }
  
 ngOnInit() {
    this.weatherSearchService.searchEntries('delhi')
      .subscribe(results => {
        this.results = results;
        console.log(this.results)
        this.receive.emit(this.results)
      });
  }




}