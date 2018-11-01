import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
// import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the MapdirectionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-mapdirections',
  templateUrl: 'mapdirections.html',
})
export class MapdirectionsPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController,public platform: Platform,private geolocation: Geolocation) {
    platform.ready().then(() => {
      this.loadMap();
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapdirectionsPage');
  }
  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        mapTypeControl: false,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        map: this.map,
        title: 'me',
        animation: google.maps.Animation,
        // icon:'pin.gif',
      });
      // marker.setPosition( google.maps.getCenter() );
    }, (err) => {
      console.log(err);
    });
  }
}
