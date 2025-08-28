import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DiveSiteService } from '../../../../shared/dive-site-service'
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl'


import * as tJson from '../../../../../assets/boundriesData/toronto.json'
import * as exampleJson from '../../../../../assets/exampleTesting/chicagoParks.json'


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
  map!: mapboxgl.Map;
  mapSiteMarkers: mapboxgl.Marker[] = [] //stores active markers
  myGeoJSONData: any = tJson;

  exampleGeoJsonData: any = exampleJson;

// mapboxgl.GeoJSON<Geometry, GeoJsonProperties>


  constructor(
    protected diveSiteService: DiveSiteService
  ) {
  }
  
  ngOnInit(): void {
    console.log("ngOnInit() - Map")
    this.testApiFromPage() //TODO: delete..

   
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit() - Map")
    this.initializeMap()
    this.getSiteMarkers()
    this.setMapboxMarkers()
  //  this.clearAllMarkers()
  
    //     mapboxgl.config.ACCESS_TOKEN = this.accessToken;
    //   this.map = new mapboxgl.Map({
    //   container: 'map', // matches the div ID
    //   style: this.mapStyle,
    //   center: [20, 50], // [lng, lat]
    //   zoom: 3,
    // });




  }

  initializeMap(){
    mapboxgl.accessToken = this.token
    this.map = new mapboxgl.Map({
    container: 'map', // container ID
    //style: 'mapbox://styles/mapbox/dark-v11', // style URL
    style: 'mapbox://styles/mapbox/outdoors-v12',
   // center: [-79.392471,43.648880], // starting position [lng, lat] *toronto
    center: [-87.637596, 41.940403], //*chicago
    zoom: 9, // starting zoom
    
    })

    this.map.on('zoomend', () => {
      const initialZoom = this.map?.getZoom();
      console.log('Initial Zoom Level:', initialZoom);
    });

    this.map.on('load', () => {
      //TODO: get and set users current geolocation


      //TODO: remove some default layers (will default ~80) or *omit on initialize? check documentation...

   


      //TODO: add source layer boundries
      this.map.addSource('toronto-boundries',{
        type: 'geojson',
        data: this.myGeoJSONData
       // data: geoJson:

      } )


      
      //add layer *can add multiple layers to single source
      this.map.addLayer({
        id: 'toronto-boundries-fill',
        type: 'fill',
        source:'toronto-boundries'

        },
        'road-label' //add below specified layer
      )

      //debug.. view layers, sources, ets..
      this.map.getStyle()
      console.log("this.map.getStyle() ..", this.map.getStyle())


      this.map.on('click', (e) => {
        console.log("click ... ", e.point)

        const features = this.map.queryRenderedFeatures(e.point, {
          layers: ['toronto-boundries-fill'] //will return all layers under click point
        })

        console.log("features ... ", features)
      })
    });
  }

  testApiFromPage() {
    this.diveSiteService.getData().subscribe()
  }

  getSiteMarkers() {
    //TODO: get Marker data

  }

  setMapboxMarkers() {








    this.exampleGeoJsonData.features.forEach((location: any) => {
      const {coordinates, type} = location.geometry
      const {title, description} = location.properties

      const popup = new mapboxgl.Popup({ offset: 25 })
    //  .setDOMContent()
    //  .setHTML()
      .setText(
        `title: ${title} \n\n description: \n ${description}`
      );

      this.mapSiteMarkers.push(
        new mapboxgl.Marker({
          color: "#3FB1CE",
          scale: 0.5
        })
          .setLngLat(coordinates)
          .setPopup(popup)
        // .listens()
          .addTo(this.map)
      )
      

    })









  }







  clearAllMarkers() {
    setTimeout(()=>{
    if (this.mapSiteMarkers.length > 0) {
      this.mapSiteMarkers.forEach(marker => marker.remove())
      this.mapSiteMarkers = []
    }
    }, 5000)
  }

}