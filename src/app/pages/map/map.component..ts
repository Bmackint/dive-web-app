import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DiveSiteService } from '../../shared/dive-site-service'
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl'


@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.template.html',
  styleUrl: './map.css'
})
export class Map implements OnInit, AfterViewInit{

  //map!: Map;
  token = ''
  mapStyle: string  = 'mapbox://styles/mapbox/streets-v12'


   map:mapboxgl.Map | undefined


  constructor(
    protected diveSiteService: DiveSiteService
  ) {
   
  }
  ngAfterViewInit(): void {
    //     mapboxgl.config.ACCESS_TOKEN = this.accessToken;
    //   this.map = new mapboxgl.Map({
    //   container: 'map', // matches the div ID
    //   style: this.mapStyle,
    //   center: [20, 50], // [lng, lat]
    //   zoom: 3,
    // });


    mapboxgl.accessToken = this.token


    this.map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
    })

    console.log("this.map ... ", this.map)

  }
  ngOnInit(): void {
      console.log("ngOnInit() - Map")
      this.testApiFromPage()
  }



  testApiFromPage() {
    this.diveSiteService.getData().subscribe()
  }

}
