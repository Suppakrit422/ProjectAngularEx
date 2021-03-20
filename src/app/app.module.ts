import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomeComponent } from './home/home.component';
import { ManageDataPageComponent } from './manage-data-page/manage-data-page.component';
import { TransferdataPageComponent } from './transferdata-page/transferdata-page.component';
import { BabkupDataPageComponent } from './babkup-data-page/babkup-data-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { RecommendPageComponent } from './recommend-page/recommend-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { UpdatePageComponent } from './update-page/update-page.component';

import {LoadDataMenuService} from './service/load-data-menu.service'

const appRoutes: Routes = [
  {path:  'home', component: HomeComponent },
  {path:  'managedata' , component : ManageDataPageComponent},
  {path:  'TransferdataPage' , component : TransferdataPageComponent},
  {path:  'BabkupDataPage' , component : BabkupDataPageComponent},
  {path:  'SettingPage' , component : SettingPageComponent},
  {path:  'RecommendPage' , component : RecommendPageComponent},
  {path:  'AboutPage' , component : AboutPageComponent},
  {path:  'UpdatePage' , component : UpdatePageComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    ManageDataPageComponent,
    TransferdataPageComponent,
    BabkupDataPageComponent,
    SettingPageComponent,
    RecommendPageComponent,
    AboutPageComponent,
    UpdatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only set true
    )
  ],
  providers: [LoadDataMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
