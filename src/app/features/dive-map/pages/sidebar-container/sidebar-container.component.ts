import { Component, OnInit } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SideBarCard } from './../../sidebar-site-item/sidebar-site-card.component'


@Component({
  selector: 'app-sidebar-container',
  imports: [NzIconModule, NzLayoutModule, NzGridModule, 
    SideBarCard
  ],
  templateUrl: './sidebar-container.template.html',
  styleUrl: './sidebar-container.css'
})
export class SideBarContainer implements OnInit {


    constructor() {

    }


    ngOnInit(): void {
        console.log("ngOnInit() - SideBarContainer")
    }







}