import { Component } from '@angular/core';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { TabsComponent } from './components/tabs/tabs.component';
import { ProductsComponent } from "./components/products/products.component";
import { SectorsComponent } from './components/sectors/sectors.component';
import { ServicesComponent } from "./components/services/services.component";
import { WhatOthersSayComponent } from "./components/what-others-say/what-others-say.component";
import { ClientSliderComponent } from "./components/clients/components/client-slider/client-slider.component";
import { ClientsComponent } from "./components/clients/clients.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, TabsComponent, ProductsComponent, SectorsComponent, ServicesComponent, WhatOthersSayComponent, ClientSliderComponent, ClientsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
