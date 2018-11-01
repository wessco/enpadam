import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController, LoadingController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { BookingTicketPage } from '../booking-ticket/booking-ticket';
import { ServiceProvider } from '../../providers/service/service';
import { SeatslayoutPage } from '../seatslayout/seatslayout';

/**
 * Generated class for the TheatreviewpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-theatreviewpage',
  templateUrl: 'theatreviewpage.html',
})
export class TheatreviewpagePage {
  theatrename: any;
  address: any;
  movie_detail: any;
  MovieName: any;
  img: any;
  theaterId: any;
  datemovie: any;
  dateid: any;
  moviedata: any;
  Certification: any;
  MovieLanguage: any;
  MovieGenre: any;
  theatreName: any;
  theatreaddress: any;
  MovieDescription: any;
  MovieFormat: any;
  date: any;
  dayname: any;
  Date: any;
  DayName: any;
  ShowTimig: any;
  loading: any;
  theatertime: any;
  moviedetailid: any;
  screenid: any;
  showdetailid: any;
  showid: any;
  showtiming: any;
  datemovie1: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,public modalCtrl: ModalController,
    public service: ServiceProvider,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TheatreviewpagePage');

    // this.theatrename=this.navParams.get('theatrename')
    // this.address=this.navParams.get('address')
    // console.log(this.theatrename)
    // console.log(this.address)
    this.datemovie=this.navParams.get('datemovie')
    this.theaterId=this.navParams.get('theaterId')
    console.log(this.datemovie,this.theaterId)

    //   this.service.theaterwisemovie(this.theaterId,this.datemovie)
    // .then((result)=>this.handletheaterwisemovie(result))
    

    
  }
  

  ionViewWillEnter(){
    this.movie_detail=this.navParams.get('movie_detail')
    console.log(this.movie_detail)

    // this.datemovie=this.navParams.get('datemovie')
    this.theaterId=this.navParams.get('theaterId')
    console.log(this.theaterId)

    this.datemovie=this.navParams.get('datemovie')
    console.log(this.datemovie)
    // this.MovieName=this.movie_detail.MovieName
    // this.img=this.movie_detail.MovieImagePath
    // this.Certification=this.movie_detail.MovieCertificationName
    // this.MovieLanguage=this.movie_detail.MovieLanguage
    // this.MovieGenre=this.movie_detail.MovieGenre

    // console.log(this.MovieName)
    // console.log(this.img)
    // console.log(this.Certification)
    // console.log( this.MovieLanguage)
    // console.log(this.MovieGenre)
    

    // console.log(this.datemovie,this.theaterId)

    // this.service.theaterwisemovie(this.theaterId,this.datemovie)
    // .then((result)=>this.handletheaterwisemovie(result))
   

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
      })
      this.loading.present()
          this.theaterId=47   
    this.service.theatermovie(this.theaterId)
    .then((result)=>this.handletheatermovie(result))


  //   this.movie_detail=this.navParams.get('movie_detail')
  //   console.log(this.movie_detail)

  //   this.img=this.movie_detail.MovieImagePath
  //   console.log(this.img)
  
  }
  // handletheaterwisemovie(result){
  //   console.log(result)
  // }

  handletheatermovie(result){
    console.log(result)
   // this.datemovie1=result.MovieBGImage
    // console.log(this.moviedetailid)

     this.loading.dismiss()
    // console.log(result.DayDetail)
    console.log(result.MovieDetail)

     this.datemovie1=result.MovieDetail
      console.log(this.datemovie1)

    this.MovieName=result.MovieDetail[0].MovieName
    this.MovieDescription=result.MovieDetail[0].MovieDescription
    this.MovieFormat=result.MovieDetail[0].MovieFormat
    this.MovieLanguage=result.MovieDetail[0].MovieLanguage
    
    console.log(result.DayDetail)
    this.Date=result.DayDetail[0].Date
    this.DayName=result.DayDetail[0].DayName

    ///-----------//
    // console.log(this.Date, this.DayName)
    
    // console.log(this.datemovie.Screendetail)
    //   this.ShowTimig=this.datemovie[0].Screendetail[0].ShowTimig
    //   console.log( this.ShowTimig)
    // console.log( this.theatreName)
    // console.log(this.theatreaddress)
  }

  presentPopover(myEvent) {
    console.log(myEvent)
    // var abc={
    //   moviedetailid:myEvent.MovieDetailId,
    //   screenid:myEvent.ScreenId,
    //   showdetailid:myEvent.ShowDetailId,
    //   showid:myEvent.ShowId,
    //   showtiming:myEvent.ShowTimig,
    //   theaterId:TheatreId,
    //   datemovie:this.theatertime.DateId,

    // }
    // this.navCtrl.push(SeatslayoutPage,abc)

    // this.moviedetailid=myEvent.MovieDetailId
    // this.screenid=myEvent.ScreenId
    // this.showdetailid=myEvent.ShowDetailId
    // this.showid=myEvent.ShowId
    // this.showtiming=myEvent.ShowTimig
    // this.theaterId=myEvent.TheatreId
     
     
    // console.log(this.moviedetailid)
           
    let profileModal = this.modalCtrl.create(PopoverPage);
    profileModal.onDidDismiss(data => {
      console.log(data.seats);
      if(data.seats != undefined){
        var params={
          
          moviedetailid:this.moviedetailid,
          screenid:myEvent.ScreenId,
          showdetailid:myEvent.ShowDetailId,
          showid:myEvent.ShowId,
          showtiming:myEvent.ShowTimig,
           datemovie:this.navParams.get('datemovie'),
           theaterId:this.navParams.get('theaterId')
        }
        this.navCtrl.push(SeatslayoutPage,params)
      }
    });
    profileModal.present();

    // let popover = this.popoverCtrl.create(PopoverPage);
    // popover.present({
    //   ev: myEvent
    // });
  }

  // movie_img(){
  //   this.navCtrl.push(BookingTicketPage)
  // }
  // presentPopover(myEvent) {

  //   let profileModal = this.modalCtrl.create(PopoverPage);
  //   profileModal.present();
  // }
}
