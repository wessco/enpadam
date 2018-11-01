import { Component, ViewChild } from "@angular/core";
import { Nav, Platform, AlertController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { RegisterPage } from "../pages/register/register";
import { LogoutPage } from "../pages/logout/logout";
import { LoginPage } from "../pages/login/login";
import { SeatslayoutPage } from "../pages/seatslayout/seatslayout";
import { TheatrelistPage } from "../pages/theatrelist/theatrelist";
import { BookingTicketPage } from "../pages/booking-ticket/booking-ticket";
import { BookingsummaryPage } from "../pages/bookingsummary/bookingsummary";
import { PaymentPage } from "../pages/payment/payment";
import { MovieticketPage } from "../pages/movieticket/movieticket";
@Component({
    templateUrl: "app.html"
})
export class MyApp {
    @ViewChild(Nav)
    nav: Nav;

    // rootPage:any = RegisterPage;
    rootPage: any = LoginPage;
    // rootPage:any = LoginPage;
    // rootPage:any = SeatslayoutPage;
    // rootPage:any = BookingTicketPage;
    // rootPage:any = BookingsummaryPage;
    // rootPage:any = PaymentPage;

    pages: Array<{ title: string; component: any }>;
    userdata: any;
    emailid: any;
    name: any;
    items: string[];

    constructor(
        public platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        public alertCtrl: AlertController
    ) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

            this.userdata = JSON.parse(localStorage.getItem("ticket_userdata"));
            if (this.userdata) {
                this.emailid = this.userdata.email;
                this.name = this.userdata.name;
            }
            console.log("userdata", this.userdata);
        });

        // used for an example of ngFor and navigation
        this.pages = [
            // { title: 'Home', component: HomePage },
            // { title: 'Register',component: RegisterPage},
            { title: "Theatre List", component: TheatrelistPage },
            { title: "Logout", component: "Logout" },
            { title: "My Movie Ticket", component: MovieticketPage }
            // {title: 'login',component:LoginPage},
            // { title: 'List', component: ListPage },
            // { title: 'Demo', component: DemoPage },
            // { title: 'photos', component: PhotosPage},
            // {title:  'Index', component: IndexPage}
        ];
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component == "Logout") {
            this.presentConfirm();
        } else {
            this.nav.setRoot(page.component);
        }
    }

    presentConfirm() {
        let alert = this.alertCtrl.create({
            title: "Confirm Log Out",
            message: "Are you sure you want to log out?",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: () => {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Log Out",
                    handler: () => {
                        console.log("Logged out");
                        this.nav.setRoot(LoginPage);
                    }
                }
            ]
        });
        alert.present();
    }
}
