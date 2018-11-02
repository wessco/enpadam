import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ServiceProvider } from '../providers/service/service';
import { ConfigProvider } from '../providers/config/config';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPage } from '../pages/register/register';
import { GalleryPage } from '../pages/gallery/gallery';
import { LogoutPage } from '../pages/logout/logout';
import { ForgotPage } from '../pages/forgot/forgot';
import { BookingTicketPage } from '../pages/booking-ticket/booking-ticket';
import { OtpconformPage } from '../pages/otpconform/otpconform';
import { PopoverPage } from '../pages/popover/popover';
import { SeatslayoutPage } from '../pages/seatslayout/seatslayout';
import { TheatreviewpagePage } from '../pages/theatreviewpage/theatreviewpage';
import { TheatrelistPage } from '../pages/theatrelist/theatrelist';
import { BookingsummaryPage } from '../pages/bookingsummary/bookingsummary';
import { PaymentPage } from '../pages/payment/payment';
import { OfferpaymentPage } from '../pages/offerpayment/offerpayment';
import { SocialloginPage } from '../pages/sociallogin/sociallogin';
import { SelectstatePage } from '../pages/selectstate/selectstate';
import { MovieticketPage } from '../pages/movieticket/movieticket';
import { BooktimePage } from '../pages/booktime/booktime';
import { MapdirectionsPage } from '../pages/mapdirections/mapdirections';
import { Geolocation } from '@ionic-native/geolocation';
import { CitylistModalPage } from '../pages/citylist-modal/citylist-modal';
import { PaytmentprovProvider } from '../providers/paytmentprov/paytmentprov';
import { PaymetdetailsPage } from '../pages/paymetdetails/paymetdetails';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    GalleryPage,
    LogoutPage,
    ForgotPage,
    BookingTicketPage,
    OtpconformPage,
    PopoverPage,
    SeatslayoutPage,
    TheatreviewpagePage,
    TheatrelistPage,
    BookingsummaryPage,
    PaymentPage,
    OfferpaymentPage,
    SocialloginPage,
    SelectstatePage,
    MovieticketPage,
    BooktimePage,
    MapdirectionsPage,
    CitylistModalPage,
    PaymetdetailsPage
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    GalleryPage,
    LogoutPage,
    ForgotPage,
    BookingTicketPage,
    OtpconformPage,
    PopoverPage,
    SeatslayoutPage,
    TheatreviewpagePage,
    TheatrelistPage,
    BookingsummaryPage,
    PaymentPage,
    OfferpaymentPage,
    SocialloginPage,
    SelectstatePage,
    MovieticketPage,
    BooktimePage,         
    MapdirectionsPage,
    CitylistModalPage,    
    PaymetdetailsPage                  
  ],                                                                         
  providers: [                  
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    ConfigProvider,
    Geolocation,
    PaytmentprovProvider,
  ]
})
export class AppModule {}
