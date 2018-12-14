import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController, LoadingController } from 'ionic-angular';
import { BookingTicketPageModule } from './booking-ticket.module';
import { PopoverPage } from '../popover/popover';
import { TheatreviewpagePage } from '../theatreviewpage/theatreviewpage';
import { SeatslayoutPage } from '../seatslayout/seatslayout';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the BookingTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */    

@IonicPage()
@Component({
    selector: 'page-booking-ticket',
    templateUrl: 'booking-ticket.html',
})
export class BookingTicketPage {
    loading: any;
    TheatreId(arg0: any): any {
      throw new Error("Method not implemented.");
    }
    img: any;
    name: any;
    date_display: string;
    detail: any;
    movie_name: any;
    type: any;
    movie_detail: any;
    MovieName: any;   
    Certification: any;
    MovieLanguage: any;
    MovieGenre: any;
    selectedcity: string;
    ticket_selectedcity: string;   
    choosecity: any;
    TheatreMap: any;
    theaterlist: any;
    theatreName: any;
    id: any;
    movieid: any;
    cityid: any;
    cityId: any;
    screenid: any;
    theatreId: any;
    theatertime: any;
    Theatredetail: any;
    desc: any;
    dateId: any;
    datemovie: any;
    DateId: any;
    MovieDescription: any;
    theatermovie: any;
    theaterId: any;
    moviedesc: any;
    movielist: any;
    description: any;
    movieduration: any;
    moviereleaseDate: any;
    movieformat: any;
    language: any;
    genre: any;
    moviedetailid: any;
    showdetailid: any;
    showid: any;
    showtiming: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController,public modalCtrl: ModalController,
        public service: ServiceProvider,public loadingCtrl: LoadingController) {
        this.choosecity={}
    }

    ionViewDidLoad() {    
        console.log('ionViewDidLoad BookingTicketPage');
    }

    moviewisetheater() {
        
        this.service.MovieWisetheaterlist(this.movieid)
        .then((result)=>this.handlemovietheatre(result));
    }

    datemoviewisetheater(){
        this.service.datemoviewisetheater(this.movieid,this.datemovie)
        .then((result)=>this.handletheaterwisemoviedate(result));
    }      
   
    // theaterwisemovie(){
    //   this.service.theaterwisemovie(this.theaterId,this.datemovie)
    // .then((result)=>this.handletheaterwisemovie(result))

    // }

    ionViewDidEnter() { 
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        })
        this.loading.present();    
        this.movie_detail=this.navParams.get('movie_detail');
        console.log(this.movie_detail);
        this.movieid=this.movie_detail.MovieId;
        this.theatreId=this.movie_detail.theatreId;
        // this.dateId=this.movie_detail.dateId
        // this.img=this.navParams.get('img')
        // this.movie_name=this.navParams.get('movie_name')
        // this.name=this.navParams.get('name')
        // this.type=this.navParams.get('type')
        // console.log(this.img,this.movie_name,this.name,this.type)
        this.MovieName=this.movie_detail.MovieName
        this.img=this.movie_detail.MovieImagePath
        this.Certification=this.movie_detail.MovieCertificationName
        this.MovieLanguage=this.movie_detail.MovieLanguage
        this.MovieGenre=this.movie_detail.MovieGenre
        // this.MovieDescription=this.movie_detail.MovieDescription
        // this.MovieDescription=this.navParams.get('MovieDescription')
        // console.log(this.MovieDescription)
        this.selectedcity=localStorage.getItem('ticket_selectedcity');
        console.log(this.selectedcity);
        // this.service.theaterlist(this.selectedcity)
        // .then((result)=> this.handletheater(result))
        // this.service.MovieWisetheaterlist(this.movieid)
        // .then((result)=>this.handlemovietheatre(result))
        // this.service.datemoviewisetheater(this.movieid,this.dateId)
        // .then((result)=>this.handletheaterwisemoviedate(result))
        // this.service.theaterwisemovie(this.theaterId,this.dateId)
        // .then((result)=>this.handletheaterwisemovie(result))
        this.detail = {     
            address1:'Luxe Cinemas: Chennai',
            address2:'PVR: Grand Galada, Pallavaram',
            address3:'Abirami Cinemas: Chennai',
            address4:'Gold (UA)',
            address5:'  Sri Ambika Theatre, Redhillls: Chennai',
            address6:' PVR: Grand Mall, Velachery',
            address7:'Vigneshwara Theatre DOLBY ATMOS: Poonamallee',
            address8:'VVM Cinemas 3D 2K AC Dts, Ponneri: Chennai'
        }
        this.moviewisetheater()
    }
    // handletheater(result){
    //   // console.log(result.Theatredetail)
    //   console.log(result)
    //   this.theaterlist=result.TheatreMap
    //   // this.desc=result.Theatredetail
    //   console.log(this.theaterlist)
    // }
    
    handlemovietheatre(result){
        console.log("theatre data",result);
        
        this.theaterId=result.Theatredetail.TheatreId;
        console.log("Theatre ID: ",this.theaterId);
        this.description=result.MovieDescription;
        this.movieduration=result.MovieDuration;
        this.moviereleaseDate=result.MovieReleaseDate;
        this.movieformat=result.MovieFormatName;
        this.language=result.Language;
        this.genre=result.Genre;
        this.desc=result.Theatredetail;
        console.log(this.desc);
        console.log( this.theatermovie);
        this.theatertime=result.DateList;
        console.log(this.theatertime);
       
        this.datemovie=this.theatertime[0].DateId;
        console.log(this.datemovie);
        this.loading.dismiss();
         for(let i = 0; i < this.theatertime.length; i++) {
            if(i == 0){
                this.theatertime[i].selected = true
            } else {
                this.theatertime[i].selected = false
            }     
        }           
        this.datemoviewisetheater();
    }
   
    getStyle(selected) {
        if(selected) {
            return "green"
        } else {
            return "black"
        }
    }

    changeDate(nowdate){
        // let indexnum= this.theatertime.indexOf(nowdate.DateId)   
         let indexnum= this.theatertime.findIndex(y => y.DateId==nowdate.DateId)
         console.log(indexnum)
         for(let i = 0; i <this.theatertime.length; i++){
            console.log(indexnum);
            if(i == indexnum) {
                this.theatertime[i].selected = true;
                this.datemovie = this.theatertime[i].DateId;
            } else {
                this.theatertime[i].selected = false;
            }   
        }   

    }
    handletheaterwisemoviedate(result) {
        console.log(result);
        this.theaterId = result.TheatreDetail[0].TheatreId;
        console.log("Theatre ID:" + this.theaterId);
        // this.theaterwisemovie()
    }

  // handletheaterwisemovie(result){
  //   console.log(result)
  // }
  
    presentPopover(myEvent, TheatreId, totaldata) {
         console.log("in totel data ", totaldata)
       // console.log(myEvent)
        // var abc={
        //   moviedetailid:myEvent.MovieDetailId,
        //   screenid:myEvent.ScreenId,
        //   showdetailid:myEvent.ShowDetailId,
        //   showid:myEvent.ShowId,
        //   showtiming:myEvent.ShowTimig,
        //   theaterId:TheatreId,
        //   datemovie:this.theatertime[0].DateId,

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
            if(data.seats != undefined) {
                var params = {
                    address1:this.detail.address1,  
                    movie_name: this.MovieName,  
                    moviedetailid: myEvent.MovieDetailId,
                    screenid: myEvent.ScreenId,
                    showdetailid: myEvent.ShowDetailId,
                    showid: myEvent.ShowId,
                    showtiming: myEvent.ShowTimig,
                    theaterId: TheatreId,  
                    TheatreName:totaldata.TheatreName,
                    datemovie: this.datemovie,
                }   
                this.navCtrl.push(SeatslayoutPage, params)
            } else {}
        });   
        profileModal.present();
        // let popover = this.popoverCtrl.create(PopoverPage);
        // popover.present({
        //   ev: myEvent
        // });
    }


  // movie_desc(TheatreId){
  //   console.log(TheatreId)
  //   // console.log(this.DateId)
  //   var params={
  //     // datemovie:this.theatertime[0].DateId,
  //     // datemovie:DateId,
  //     theaterId:TheatreId
  //     // theaterId:TheatreId,
  //     // datemovie:DateId
  //   }
  //   this.navCtrl.push(TheatreviewpagePage,params)
  // }


    movie_desc(x,TheatreId){
        console.log(x);
        console.log(TheatreId);
        console.log(this.DateId);
        var params = {
            movie_detail:x,
            theaterId:TheatreId,
            datemovie:this.theatertime[0].DateId,
        }
        this.navCtrl.push(TheatreviewpagePage,params)
    }
   
  
  // theaterview3(TheatreName){
  //   var params={
  //     theatrename:TheatreName,
  //     address:'Chandra Metro Mall, Arcot Road, Virugambakkam, Chennai, Tamil Nadu 600092.'
  //   }
  //   this.navCtrl.push(TheatreviewpagePage,params)
  // }

    validate() {
        if(this.date_display == '' || this.date_display == undefined){
            alert("Plaese select date & time");
            return false;
        }
        return true;
    }

  // citywisetheaterlist(){
  
  //        this.service.gettheaterdetails(this.theatreName,this.id)
  //        .then((results)=> this.gettheaterdetails(results))
    
  //    }
  //    gettheaterdetails(results){
  //   console.log(results)
  // }
}

