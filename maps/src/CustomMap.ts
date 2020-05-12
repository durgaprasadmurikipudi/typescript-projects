import { Locatable } from './Locatable';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string, mapOptions: google.maps.MapOptions) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), mapOptions);
  }

  addMarker(locatable: Locatable): void {
    const { lat, long: lng} = locatable.location;
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat, 
        lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: locatable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}