import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  @Input()
  location: string;
  isPositionError = false;
  // tslint:disable-next-line:no-inferrable-types
  lat: number;
  // tslint:disable-next-line:no-inferrable-types
  lng: number;

  constructor(private mapService: MapService, private ref: ChangeDetectorRef) {}

  mapReadyHandler() {
    this.mapService.getGeoLocation(this.location).subscribe(
      coordinates => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
        this.ref.detectChanges();
      },
      () => {
        this.isPositionError = true;
      }
    );
  }
}
