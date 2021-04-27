import { Feature } from './../models/feature';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from "../../environments/environment"
import { map } from 'rxjs/operators'
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  features: Feature[] = [];
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 42.000721;
  lng = 21.425545;
  zoom = 12;
  BACKEND_URL = environment.uri;

  constructor(
    private http: HttpClient,
    private geo: Geolocation
  ) {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  async buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    })
    this.map.addControl(new mapboxgl.NavigationControl());
    this.features = (await this.getGeoJSON()).data;
    this.addMarkers();
    this.getUserCoords();
  }


  getGeoJSON() {
    return this.http.get<{ data: Feature[] }>(this.BACKEND_URL + '/points')
      .pipe(
        map(points => {
          return {
            data: points.data.map((point: any) => {
              return {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [point.location.coordinates[0], point.location.coordinates[1]]
                },
                properties: {
                  title: 'Mapbox',
                  description: 'Washington, D.C.'
                }
              }
            })
          }
        })
      ).toPromise()
  }

  addMarkers() {
    const geoJson = {
      type: 'FeatureCollection',
      features: this.features
    }
    geoJson.features.forEach((marker) => {
      this.setCoords(marker.geometry.coordinates[1], marker.geometry.coordinates[0])
    })
  }



  async getUserCoords() {
    const res = await this.geo.getCurrentPosition();
    this.lat = res.coords.latitude;
    this.lng = res.coords.longitude;
    this.setUserCoords(this.lng, this.lat);
  }



  setCoords(lng, lat) {
    new mapboxgl.Marker({
    })
      .setLngLat([lng, lat])
      .addTo(this.map)
  }



  setUserCoords(lng, lat) {
    new mapboxgl.Marker({
      color: "red"
    })
      .setLngLat([lng, lat])
      .addTo(this.map)
  }
}
