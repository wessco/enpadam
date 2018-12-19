import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, ModalController, AlertController } from "ionic-angular";
import { GalleryPage } from "../gallery/gallery";
import { BookingTicketPage } from "../booking-ticket/booking-ticket";
import { ServiceProvider } from "../../providers/service/service";
import { CitylistModalPage } from "../citylist-modal/citylist-modal";
import { Slides } from 'ionic-angular';


@Component({
    selector: "page-home",
    templateUrl: "home.html"
})
export class HomePage {
    @ViewChild(Slides) slides: Slides;


    imagelist: any;
    select_city: number;
    choosecity: any;
    id: any;
    cities: any;
    showData=false
    movielist: any;
    upcomingList=[]
    slideimage: any;
    showList: boolean;
    items: any;
    displayArtist: any;
    movie: boolean;
    moviename: any;
    movieName: any;
    movienamesuggest: any;
    movieid: any;
    NowRunningmovie: any;
    UpcomingmovieData: any;
    cityname="Select City"
    searchMovie=false
    SlideOptions = {    
        initialSlide: 0,
        loop: true,
        autoplay:2000,
        autoplayDisableOnInteraction: false
      };
      suggestedMoviesBackUp=[]

    constructor(
        public navCtrl: NavController,
        public service: ServiceProvider,
        public navParams: NavParams,
        public modalCtrl: ModalController,
        private alertCtrl: AlertController
    ) {
       
        // this.choosecity={}
        this.cities = [];
        this.movielist = [];
    }

    ionViewDidLoad() {
        console.log("ionViewDidLoad HomePage");
        this.movieid = 1;

        this.service
            .moviesuggest(this.moviename)
            .then(result => this.handlemoviesuggest(result));

        this.service
            .MovieWisetheaterlist(this.movieid)
            .then(result => this.handlemovietheatre(result));

        this.service.getSlider()
            .then((res:any) => {
                let imagdata = res.MovieBGImage
                this.slideimage = imagdata
            })
    }
      
    handlemoviesuggest(result) {
        console.log(result);
        // console.log(result.movieName[0].value)
        this.movienamesuggest = result.movieName;
        console.log(this.movienamesuggest);
        // console.log(result[0].value)
    }

    handlemovietheatre(result) {
        console.log(result);
    }

    setItems() {
        this.items = this.movienamesuggest;
    }

    // onInput(ev: any){
    //   this.setItems();
    //   console.log(ev)
    //   console.log(ev.target.value)
    //   let val = ev.target.value;
    //   console.log(val)
    //   if (val && val.trim() !== '') {
    //     console.log(this.items)
    //     this.displayArtist = this.items.filter((item) => {
    //       console.log(item)
    //       console.log(item.value.toLowerCase().indexOf(val.toLowerCase()) > -1)
    //       return (item.value.toLowerCase().indexOf(val.toLowerCase()) > -1);

    //     })
    //    console.log(this.displayArtist)
    //   }
    //   else{
    //      this.displayArtist = this.movienamesuggest;
    //   }
    // }
   
    onInput(searchkey) {
        console.log(searchkey);
        let val=searchkey.data
        if(val==null){
            this.searchMovie=false
        }     
      else if (val && val.trim() != '') {
          console.log("in key ")
            this.searchMovie=true
           val=searchkey.data.toLowerCase()
          this.movienamesuggest = this.movienamesuggest.filter((item) => {
                  if(item.MovieName)
               return (item.MovieName.toLowerCase().indexOf(val) > -1);

          })      
        }    
        else{

        } 
        if(searchkey.inputType=='deleteContentBackward'){
       this.movienamesuggest=this.suggestedMoviesBackUp
       if (val && val.trim() != '') {
        val=searchkey.data.toLowerCase()    
        this.movienamesuggest = this.movienamesuggest.filter((item) => {
            if(item.MovieName)
          return (item.MovieName.toLowerCase().indexOf(val) > -1);
          })
       }
    }
  
    }
    onCancel(ev: any) {
        console.log("onCancel");
        ev.target.value = "";
        this.searchMovie=true
        this.displayArtist = this.movienamesuggest;
    }
   
    ionViewWillEnter() {    
        let city = localStorage.getItem("ticket_selectedcity");
        console.log("From Local Storage", city)
        if(city == null || city == undefined ) {
            this.callCityModal();
        } else {
            this.showData = true;
            this.choosecity = localStorage.getItem("ticket_selectedcity");
            this.cityname = localStorage.getItem('selectedCityName');
            this.service
                .selectcity(this.choosecity)
                .then(results => this.selectcity(results))
        }
        this.service.getcities().then(result => this.handleservice(result));
    }

    callCityModal() {
        let profileModal = this.modalCtrl.create(CitylistModalPage);
        profileModal.present();
        profileModal.onDidDismiss(data => {
            console.log(data);
            if(data == undefined || data == null) {
                this.showAlert()
            } else {
                localStorage.setItem("ticket_selectedcity", data.id)
                this.choosecity=data.id;
                this.cityname=data.value;
                localStorage.setItem("selectedCityName", data.value)
                this.service
                    .selectcity(this.choosecity)
                    .then(results => this.selectcity(results))
            }   
        });
    }

    showAlert() {
        let alert = this.alertCtrl.create({       
            subTitle: 'Please select a city',
            buttons: ['Ok']
        });
        alert.present();    
    }
 
    // handleservice(result) {
    handleservice(result: { CityValue?: any; }) {
        console.log(result);
        this.cities = result.CityValue;
        console.log(this.cities);
        console.log(result.CityValue[0].id);
    }
    // handlemoviesuggest(result){
    //   console.log(result)
    // }
    // console.log(result.movieName[0].value)

    // search(){
    //   this.service.searchdetail(this.cities)
    //    .then((result)=>this.handlesearchmoviedetail(result))
    // }
    //   handlesearchmoviedetail(result){
    //     console.log(result)
    //   console.log(result.MovieListMap)
    //   console.log(result.TheatreMap)
    // }

    // onCancel(){
    //   this.topics=[]

    // }

    // movie_desc(x){
    //   console.log(x)
    //   var params={
    //     movie_detail:x
    //   }
    //   this.navCtrl.push(GalleryPage,params)
    // }

    movie_desc(x: any) {
        console.log(x);
        var params = {
            movie_detail: x
        };
        this.navCtrl.push(BookingTicketPage, params);
    }
        
    // pic1(){
    //   this.navCtrl.push(BookingTicketPage)
    // }
    
    selectcity(results) {
    // selectcity(results: { [x: string]: any[]; NowRunningMovie?: any; UpcommingMovie?: any; }) {
        // this.navCtrl.push(OtpconformPage)
        console.log(results);
        // console.log(results.map.City.id.value)
        this.showData = true;
        console.log(results.NowRunningMovie);
        this.upcomingList = [];
        this.movielist = []; 
       
        if (results.NowRunningMovie  && results.NowRunningMovie.length > 0) {
            this.NowRunningmovie = false;
            // console.log("I am inner if condition Now Running Movie");
            this.movielist = results.NowRunningMovie.slice();         
            // console.log("Lists:" + this.movielist);
            this.displayArtist = this.movienamesuggest;
            var n = this.movielist.length;
            console.log(n);        
            for (var i = 0; i < n; i++) {   
                this.movienamesuggest[i]=this.movielist[i];              
            }
            this.suggestedMoviesBackUp=this.movienamesuggest;          
            //   console.log(this.slideimage);
        } else {
            this.NowRunningmovie=true;
        }
        if(results.UpcommingMovie && results.UpcommingMovie.length > 0) {
            console.log("In upcoming true: ");
            this.UpcomingmovieData = false;
            this.upcomingList = results['UpcommingMovie'];
            for(let i=0; i<this.upcomingList.length; i++) {
               //   this.movienamesuggest.push(this.upcomingList[i])
            }
            console.log(this.upcomingList);
        } else {
            console.log("in upcoming false");
            this.UpcomingmovieData = true;
        }
    }   
}