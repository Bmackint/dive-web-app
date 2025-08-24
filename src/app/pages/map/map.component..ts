import { Component, OnInit } from '@angular/core';
import { DiveSiteService } from '../../shared/dive-site-service'

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.template.html',
  styleUrl: './map.css'
})
export class Map implements OnInit{

  constructor(
    protected diveSiteService: DiveSiteService
  ) {
   
  }
  ngOnInit(): void {
      console.log("ngOnInit() - Map")
      this.testApiFromPage()
  }



  testApiFromPage() {
    this.diveSiteService.getData().subscribe()
  }

}
