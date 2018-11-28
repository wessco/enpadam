import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config';
import 'rxjs/add/operator/map';
import { resolveDefinition } from '@angular/core/src/view/util';

@Injectable()
export class ServiceProvider {
    url: string;
    user: any;
    city: any;
    sliderbg: any;

    constructor(public http: HttpClient,public config: ConfigProvider) {
        console.log('Service Started');    
        this.url = config.url;
    }

    //Email availability
    checkMail(email) {
        return new Promise(resolve => {
            this.http.get(this.url + 'checkEmailAvailable?email=' + email).map(res => res)
            .subscribe(data => {
                // console.log("login response", data);
                resolve(data);
            });
        });
    }
  
    // LOGIN 
    login(email, password) {
        console.log("Email and Password: ", email, password);
        return new Promise(resolve => {
            this.http.get(this.url + 'setLoginForUser?username=' + email + '&password=' + password + '&roleId=4').map(res => res)
            .subscribe(data => {
                console.log("Login Response: ", data);
                this.user = data;
                resolve(this.user);
            });
        });
    }
    // LOGIN ENDS

    // REGISTRATION
    submit(firstname, lastname, email, mobilenumber, password) {
        console.log(firstname)
        console.log(lastname)
        console.log(email)
        console.log(mobilenumber)
        console.log(password)      
        return new Promise(resolve => {
            this.http.get(this.url + 'setUserRegisterSubmit?firstname=' + firstname + '&email=' + email + '&mobile=' + mobilenumber + '&password=' + password).map(res => res)
            // this.http.get(this.url + 'setLogin?username='+email+'&password='+password).map(res => res)
            .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    // REGISTRATION ENDS

    // OTP
    verify(otpnumber, userid) {
        console.log("OTP #: ", otpnumber);
        return new Promise(resolve => {
            this.http.get(this.url + 'setAccountActivation?smspin=' + otpnumber + '&userid=' + userid).map(res => res)
            // this.http.get(this.url + 'setLogin?username='+email+'&password='+password).map(res => res)
            .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    // OTP ENDS

    // HOME PAGE - GET CITYWISE OTHER DETAILS
    selectcity(id) {
        console.log("City ID: ",id);
        // console.log(city)
        return new Promise(resolve => {
            this.http.get(this.url + 'getCityWiseOtherDetails?cityId=' + id).map(res => res)
            .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    // GET CITYWISE OTHER DETAILS ENDS

    // GET CITY LIST
    getcities() {
        return new Promise(resolve => {
            this.http.get(this.url + 'getCityValues').map(res => res)
            .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    // GET CITY LIST ENDS

    // GET SLIDER IMAGES 
    getSlider() {
        return new Promise(resolve => {
            this.http.get(this.url + 'getBackgroundImages').map(res => res)
            .subscribe(data => {
                this.sliderbg = data;
                resolve(this.sliderbg);            
            })
        })
    }

    // BOOKED TICKET HISTORYhttps://emailforjobs.com/app/userHistory?userId=14
    bookedTickets(id) {
        return new Promise(resolve => {
            this.http.get(this.url + 'userHistory?userId=' +id).map(res => res)
            .subscribe(data => {
                this.user = data;
                resolve(this.user);            
            })
        })
    }

    // gettheaterdetails(theatreName,id){
    //   console.log(theatreName,id)
    //   return new Promise(resolve => {
    //     this.http.get(this.url + 'getCitywiseTheaderDetails?cityId='+id+'&theatreName='+theatreName).map(res => res)
    //       .subscribe(data => {
    //         this.user = data;
    //         resolve(this.user);
    //       });
    //     });
    //   }

    // GET THEATRE LIST
    theaterlist(id){
        return new Promise(resolve => {
            this.http.get(this.url + 'getCitywiseTheaderDetails?cityId='+id).map(res => res)
            .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    // GET THEATRE LIST ENDS

    // MOVIE WISE THEATRE LIST
    MovieWisetheaterlist(id){
        return new Promise(resolve => { 
            // this.http.get(this.url + 'getMovieWisetheatreDetails?movieId='+2).map(res => res)
            this.http.get(this.url + 'getMovieWisetheatreDetails?movieId='+id).map(res => res)
            .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    // MOVIE WISE THEATRE LIST ENDS

    // DATE FILTER MOVIE WISE THEATRE 
    datemoviewisetheater(mid,did){
        return new Promise(resolve => {
            this.http.get(this.url + 'dateFilterInMoviewiseTheater?movieId='+ mid + '&dateId=' + did).map(res => res)
            // this.http.get(this.url + 'dateFilterInMoviewiseTheater?movieId='+3+'&dateId='+20180914).map(res => res)
            .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    // DATE FILTER MOVIE WISE THEATRE ENDS

    // theaterwisemovie(thid,did){

    //   return new Promise(resolve => {
    //     // this.http.get(this.url + 'dateFilterInTheaterwiseMovie?theaterId='+thid+'&dateId='+did).map(res => res)
    //     this.http.get(this.url + 'dateFilterInTheaterwiseMovie?theaterId='+6+'&dateId='+20180914).map(res => res)
    //       .subscribe(data => {
    //         this.user = data;
    //         resolve(this.user);
    //       });
    //   });
    // }

    // GET SEARCH DETAILS
    searchdetail(id){
        return new Promise(resolve => {
            this.http.get(this.url + 'getSearchDetails?cityId='+id).map(res => res)
            .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    // GET SEARCH DETAILS ENDS
    
    // THEATRE LAYOUT
    theaterlayout(thid, scrid, shotmid, mdid, shodetailid) {
    // theaterlayout()
        return new Promise(resolve => {
            // this.http.get(this.url + 'getTheaterLayout?theaterIdVal='+thid+'&scrId='+scrid+'&showTimeId='+shotmid+'&movieDetailsId='+mdid+'&showDetailId='+shodetailid).map(res => res)
            // this.http.get(this.url + 'getTheaterLayout?theaterIdVal='+6+'&scrId='+12+'&showTimeId='+14+'&movieDetailsId='+14+'&showDetailId='+7).map(res => res)
            this.http.get(this.url + 'getTheaterLayout?theaterIdVal=' + thid + '&scrId=' + scrid + '&showTimeId=' + shotmid + '&movieDetailsId='+ mdid + '&showDetailId=' + shodetailid).map(res => res)
                .subscribe(data => {
                    this.user = data;
                    resolve(this.user);
                });
        });
    }
    // THEATRE LAYOUT ENDS

    // TICKET SOLD DETAIL
    ticketsolddetail(Params){
        console.log(Params)
        return new Promise(resolve => {
            // this.http.get(this.url + 'getUserTicketSoldDetail?userId='+Params.userId+'&theaterIdVal='+Params.theaterIdVal+'&scrId='+Params.scrId+'&showTimeId='+Params.showTimeId+'&movieDetailsId='+Params.movieDetailsId+'&showDetailId='+Params.showDetailId+'&seatStr='+Params.seatStr+'&dateId='+Params.dateId+'&TicketPrice='+Params.TicketPrice).map(res => res)
            this.http.get(this.url + 'getUserTicketSoldDetail?userId=' + Params.userId + '&theaterIdVal=' + Params.theaterIdVal + '&scrId=' + Params.scrId + '&showTimeId=' + Params.showTimeId + '&movieDetailsId=' + Params.movieDetailsId + '&showDetailId=' + Params.showDetailId + '&seatStr=' + Params.seatStr+'&dateId=' + Params.dateId + '&TicketPrice=' + Params.TicketPrice).map(res => res)
                .subscribe(data => {
                    this.user = data;
                    resolve(this.user);
                });
        });
    }
    // TICKET SOLD DETAIL ENDS

    // GET THEATRE MOVIES
    theatermovie(id) {
        console.log(id)
        return new Promise(resolve => {
            this.http.get(this.url + 'getTheaterMovies?theatreId='+id).map(res => res)
            .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    // GET THEATRE MOVIES ENDS

    // CITY WISE THEATRE DETAILS
    citywisetheader(id) {
        console.log(id)
        return new Promise(resolve => {
            this.http.get(this.url + 'getCitywiseTheaderDetails?cityId='+id).map(res => res)
            .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    // CITY WISE THEATRE DETAILS ENDS

    // MOVIE SUGGEST AUTO SUGGEST
    moviesuggest(ev) {
        console.log(ev);
        return new Promise(resolve => {
            this.http.get(this.url + 'getMovieSuggest?movieName='+ev)
            .map(res => res)
            .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    // MOVIE SUGGEST AUTO SUGGEST ENDS
}
// SERVICE PROVIDER ENDS