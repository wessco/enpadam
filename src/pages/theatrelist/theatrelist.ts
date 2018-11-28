import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ServiceProvider } from '../../providers/service/service';
import { TheatreviewpagePage } from '../theatreviewpage/theatreviewpage';
import { convertDataToISO } from 'ionic-angular/umd/util/datetime-util';
import { CitylistModalPage } from '../citylist-modal/citylist-modal';

/**
 * Generated class for the TheatrelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-theatrelist',
    templateUrl: 'theatrelist.html',
})
export class TheatrelistPage {
    movie_detail: any;
    MovieName: any;
    choosecity: any;
    citytheater: any;
    datemovie: any;
    theaterId: any;
    moviedetailid: any;
    datemovie1: any;
    MovieDescription: any;
    MovieFormat: any;
    MovieLanguage: any;
    movielist: any;
    theatermovie: any;
    DateId: any;
    items: any;
    displayArtist: any;
    cities: any;
    cityname: string;
    filterTheatres=[]
    search=false
    constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
        this.choosecity = -1;
        this.cities = [];
    }

    ionViewDidLoad() {
        this.choosecity = localStorage.getItem("ticket_selectedcity")
        this.cityname = localStorage.getItem('selectedCityName')   
        console.log('ionViewDidLoad TheatrelistPage');  
        this.service.citywisetheader(this.choosecity)
            .then((result)=>this.handlecitywisetheader(result));     
    }

    callCityModal() {
        let profileModal = this.modalCtrl.create(CitylistModalPage);
        profileModal.present();
        profileModal.onDidDismiss(data => {
            console.log(data);
            if(data == undefined || data == null) {
            } else {
                localStorage.setItem("ticket_selectedcity",data.id)
                this.choosecity = data.id;
                this.cityname = data.value;
                localStorage.setItem("selectedCityName", data.value);
                this.service.citywisetheader(this.choosecity)
                    .then((result)=>this.handlecitywisetheader(result));
            }   
        }); 
    }

    handlesearchtheader(result) {
        console.log(result);
        // console.log(result.MovieListMap[0].MovieName);
        console.log(result.TheatreMap);
    }

    setItems() {
        this.items = this.theatermovie;
    }

    onInput(ev: any) {
        this.search = true;
        this.setItems();
        console.log(ev);
        console.log(ev.target.value);
        let val = ev.target.value;
        console.log(val);
        if (val && val.trim() !== '') {
            console.log(this.items);
            this.filterTheatres = this.filterTheatres.filter((item) => {
                console.log(item);
                console.log(item.TheatreName.toLowerCase().indexOf(val.toLowerCase()) > -1);
                return (item.TheatreName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
            console.log(this.displayArtist);
        } else {
            this.filterTheatres = this.displayArtist ;
        }
    }

    onCancel(ev: any){
        console.log("onCancel");
        ev.target.value = '';
        this.search = false;
        this.filterTheatres = this.displayArtist ;
        this.displayArtist = this.theatermovie;
    }
    //   ionViewWillEnter(){

    //     city(){
    //       console.log(this.choosecity)
    //       localStorage.setItem('ticket_selectedcity',this.choosecity)
    //     this.service.citywisetheader(this.choosecity)
    //     .then((result)=>this.handlecitywisetheader(result))
    // }
    // }

    ionViewWillEnter() {
        this.service.getcities()
            .then((result) => this.handleservice(result));
    }

    handleservice(result) {
        console.log(result);
        this.cities = result.CityValue;
        console.log(this.cities);
        console.log(result.CityValue[0].id);
    }

    city() {
        console.log(this.choosecity);
        localStorage.setItem('ticket_selectedcity',this.choosecity)
        this.service.citywisetheader(this.choosecity)
        .then((result) => this.handlecitywisetheader(result));
    }

    handlecitywisetheader(result) {
        console.log(result);
        console.log(result.TheatreMap);
        this.theatermovie=result.TheatreMap;
        console.log(this.theatermovie);
        this.displayArtist = this.theatermovie;
        this.filterTheatres=this.displayArtist
        console.log(this.displayArtist);
        // this.citytheater=result.TheatreMap[0].TheatreId
        this.citytheater = result.TheatreMap[0].TheatreName;
        console.log(this.citytheater);
    }
    // movie_desc(x) {
    movie_desc(x: { TheatreId: any; }) {
        console.log(x);
        console.log(x.TheatreId);
        console.log(this.DateId);
        var params = {
            movie_detail: x,
            theaterId: x.TheatreId,
            datemovie: this.navParams.get('datemovie')
        }
        this.navCtrl.push(TheatreviewpagePage, params);
    }  
    arrow_press() {
        this.navCtrl.setRoot(HomePage)
    }
}
