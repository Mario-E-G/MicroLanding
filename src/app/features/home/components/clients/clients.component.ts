import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ClientSliderComponent } from './components/client-slider/client-slider.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ClientSliderComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientsComponent {
  clients: { clientImg: string, title: string }[] = [
    { clientImg: 'assets/images/client.svg', title: 'client1' },
    { clientImg: 'assets/images/client.svg', title: 'client2' },
    { clientImg: 'assets/images/client.svg', title: 'client3' },
    { clientImg: 'assets/images/client.svg', title: 'client4' },
    { clientImg: 'assets/images/client.svg', title: 'client5' },
  ]
}
