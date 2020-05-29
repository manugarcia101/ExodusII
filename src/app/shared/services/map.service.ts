import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  markers: mapboxgl.Marker[];
  style = `mapbox://styles/mapbox/streets-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = 51.49;
  lng = -0.08;
  // zoom = 1.5;
  constructor() {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = environment.mapBoxToken;
  }
  buildMap(dataIndex, data, zoom = 1.5, container='map', lat = 51.49, lng = -0.08, cityData?) {
    
    let list: any[] = [];
    for(let city in data){
      list.push(city);
    }

    let verdeOscuro = []
    let verdeClaro = []
    let amarilloVerdoso = []
    let amarillo = []
    let naranja = []
    let rojoClaro = []

    let city = []

    if(cityData){
      // console.log('Entro mapa')
      let title = cityData.City_name
      let index = cityData.Qli
      let auxObj = {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [lng,lat]
        },
        "properties": {
          "title": title,
          "description": dataIndex + " index value: " + index
        }
      }
      city.push(auxObj);
    }

    for(let i=0; i<list.length; i++){
      let title = data[list[i]]['City_name']
      let index = data[list[i]][dataIndex]
      let lat = data[list[i]]['Latitude']
      let long = data[list[i]]['Longitude']
      let auxObj = {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [long,lat]
        },
        "properties": {
          "title": title,
          "description": dataIndex + " index value: " + index
        }
      }
      if(data[list[i]]['Color_qli'] === '#0d9600'){
        verdeOscuro.push(auxObj);
      }
      if(data[list[i]]['Color_qli'] === '#1de500'){
        verdeClaro.push(auxObj);
      }
      if(data[list[i]]['Color_qli'] === '#a7e300'){
        amarilloVerdoso.push(auxObj);
      }
      if(data[list[i]]['Color_qli'] === '#f9fb00'){
        amarillo.push(auxObj);
      }
      if(data[list[i]]['Color_qli'] === '#ff9200'){
        naranja.push(auxObj);
      }
      if(data[list[i]]['Color_qli'] === '#ff4b00'){
        rojoClaro.push(auxObj);
      }
    }

    let map = new mapboxgl.Map({
      container: container,
      style: this.style,
      center: [lng, lat],
      zoom: zoom
    });

    map.on('load', function() {

      map.addSource('City', {
        "type":"geojson",
        "data": {
          "type": "FeatureCollection",
          "features":city}
      })

      map.addSource('VerdeOscuro', {
        "type":"geojson",
        "data": {
          "type": "FeatureCollection",
          "features":verdeOscuro}
      })

      map.addSource('VerdeClaro', {
        "type":"geojson",
        "data": {
          "type": "FeatureCollection",
          "features":verdeClaro}
      })

      map.addSource('AmarilloVerdoso', {
        "type":"geojson",
        "data": {
          "type": "FeatureCollection",
          "features":amarilloVerdoso}
      })

      map.addSource('Amarillo', {
        "type":"geojson",
        "data": {
          "type": "FeatureCollection",
          "features":amarillo}
      })

      map.addSource('Naranja', {
        "type":"geojson",
        "data": {
          "type": "FeatureCollection",
          "features":naranja}
      })

      map.addSource('RojoClaro', {
        "type":"geojson",
        "data": {
          "type": "FeatureCollection",
          "features":rojoClaro}
      })

      map.addLayer({
        id: 'pointsRojosClaros',
        source: 'RojoClaro',
        type: 'circle',
        paint: {
          'circle-radius':6,
          'circle-color': "#ff2600"
        }
      });

      map.addLayer({
        id: 'pointsNaranjas',
        source: 'Naranja',
        type: 'circle',
        paint: {
          'circle-radius':6,
          'circle-color': "#ff9200"
        }
      });

      map.addLayer({
        id: 'pointsAmarillos',
        source: 'Amarillo',
        type: 'circle',
        paint: {
          'circle-radius':6,
          'circle-color': "#ffec19"
        }
      });

      map.addLayer({
        id: 'pointsAmarilloVerdoso',
        source: 'AmarilloVerdoso',
        type: 'circle',
        paint: {
          'circle-radius':6,
          'circle-color': "#a7e300"
        }
      });

      map.addLayer({
        id: 'pointsVerdesClaros',
        source: 'VerdeClaro',
        type: 'circle',
        paint: {
          'circle-radius':6,
          'circle-color': "#1de500"
        }
      });

      map.addLayer({
        id: 'pointsVerdesOscuros',
        source: 'VerdeOscuro',
        type: 'circle',
        paint: {
          'circle-radius':6,
          'circle-color': "#0d9600"
        }
      });

      map.addLayer({
        id: 'pointsCity',
        source: 'City',
        type: 'circle',
        paint: {
          'circle-radius':10,
          'circle-color': "#000000"
        }
      });

    });

    map.on('click', e => {
      const result = map.queryRenderedFeatures(e.point);
      if(result[0].properties.description) {
        const popup = new mapboxgl.Popup({closeButton: false});
        const title = result[0].properties.title;
        const description = result[0].properties.description;
        console.log("/explorer/city/" + title)
        popup.setLngLat(e.lngLat)
        .setHTML(`${title}<br>${description}<br><a routerLinkActive="active" routerLink="/explorer/city/${title}" href="http://localhost:4200/explorer/city/${title}"><button>Explore city</button></a>`)
        .addTo(map)
      }
    })
  }
}