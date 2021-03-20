import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Menu } from '../Template/Menu/Menu';
import { LMenu } from '../Template/Menu/Menu';
import {LoadDataMenuService} from '../service/load-data-menu.service'

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  ListMenu:LMenu[] = [];

  constructor(public menuService:LoadDataMenuService) {  }

  ngOnInit(): void {
   this.LoadJsonMenu();
  }

  LoadJsonMenu(){
    this.ListMenu = this.menuService.loadMenu();
  }
    
}
