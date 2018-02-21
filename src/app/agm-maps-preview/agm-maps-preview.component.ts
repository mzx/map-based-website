import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agm-maps-preview',
  templateUrl: './agm-maps-preview.component.html',
  styleUrls: ['./agm-maps-preview.component.scss']
})
export class AgmMapsPreviewComponent implements OnInit {
  zoom = 8;
  // initial center position for the map
  lat = 50.0176168;
  lng = 14.483081;

  markers: Marker[] = [
    {
      lat: 50.2268466,
      lng: 12.8394502,
      label: 'A',
      draggable: true
    },
    {
      lat: 49.7449746,
      lng: 13.3283186,
      label: 'B',
      draggable: false
    },
    {
      lat: 50.0176168,
      lng: 14.483081,
      label: 'C',
      draggable: true
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent | any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}

// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
