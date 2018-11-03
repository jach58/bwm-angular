import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { MapComponent } from './map.component';
import { MapService } from './map.service';

import { CamelizePipe } from 'ngx-pipes';

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYLQn8qQH9RWqJuaKwswfxERhVNoZIp3k'
    }),
    CommonModule
  ],
  providers: [MapService, CamelizePipe]
})
export class MapModule {}
