import { Injectable } from '@angular/core';
import { Menu } from '../Template/Menu/Menu';
import { LMenu } from '../Template/Menu/Menu';
import FileMenu from '../../assets/MenuBar.json';

@Injectable({
  providedIn: 'root'
})
export class LoadDataMenuService {

  constructor() { }


  loadMenu():LMenu[]{

    let GetItemMenu = FileMenu.LMenu;
    
    let ListItemMenu:LMenu[] = GetItemMenu.map(val => ({
      URL: val.URL,
      icon_style: val['icon-style'],
      Name:val.Name
    }));

    return ListItemMenu;
  }

}
