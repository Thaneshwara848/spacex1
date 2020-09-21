import { Component, OnInit } from '@angular/core';
import {  ApiServiceService } from 'src/app/api-service.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  sucess:boolean=true;
  LandSucc:boolean=true;
  showError: string;

  constructor(private http:ApiServiceService) { }

  flightData:any=[]
  dev_name="Thaneshwara";
  
  ngOnInit()
  {
    
     this.http.fetchFlights().subscribe(data=>{
        // console.log("responce recived ",data),
      this.flightData = data;
      if(this.flightData.length == 0) {
        this.showError = "No Record Found";
      }
      console.log("Data :",this.flightData)      
      // error=>console.log("exception recoved ")
      })
  }

  sendYear(year): void {
    console.log(year);
    this.http.fetchAll(year,this.sucess,this.LandSucc).subscribe(data=>{
      // console.log("responce recived ",data),
    this.flightData = data;
    console.log("sucees :",this.flightData)      
    // error=>console.log("exception recoved ")
    })
  }

  sendSuccess(succ) {
    this.sucess = succ;
    //console.log(succ);
    this.http.fetchLanchSucess(succ).subscribe(data=>{
      // console.log("responce recived ",data),
    this.flightData = data;
    console.log("sucees :",this.flightData)      
    // error=>console.log("exception recoved ")
    })
  }

  LandSuccLuanchSucc(val){
    this.LandSucc = val;
    this.http.fetchLanchSucessAndLandSuccess(val).subscribe(data=>{
      // console.log("responce recived ",data),
    this.flightData = data;
    console.log("Land :",this.flightData)      
    // error=>console.log("exception recoved ")
    })

  }
  


}
