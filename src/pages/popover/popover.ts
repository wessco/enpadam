import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SeatslayoutPage } from '../seatslayout/seatslayout';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-popover',
    templateUrl: 'popover.html',  
})

export class PopoverPage {  
    selected: any;
    name: any;
    movie_name: any;
    date_display: any;
    detail: any;
 
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
        this.selected = 2;
        this.detail = {
            movie_name1:'Pyaar Prema Kaadhal',
            movie_name2:'Vishwaroopam',
            movie_name3:'Satyameva Jayathe',
            movie_name4:'Kolamaavu kokila',
            movie_name5:'The NUN',
            movie_name6:'Gold',
            movie_name7:'Geetha Govindam',
            movie_name8:'Goodachari',
            address1:'Luxe Cinemas: Chennai',
            address2:'PVR: Grand Galada, Pallavaram',
            address3:'Abirami Cinemas: Chennai',
            address4:'Gold (UA)',
            address5:'  Sri Ambika Theatre, Redhillls: Chennai',
            address6:' PVR: Grand Mall, Velachery',
            address7:'Vigneshwara Theatre DOLBY ATMOS: Poonamallee',
            address8:'VVM Cinemas 3D 2K AC Dts, Ponneri: Chennai'
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PopoverPage');
        this.date_display = this.navParams.get('date');
        console.log(this.date_display);
    }

    // close() {
    //   this.viewCtrl.dismiss();
    // }  
  
    seats() {
        // this.navCtrl.push(SeatslayoutPage,this.detail)
        if( this.selected == undefined) {
            alert("please select seats first!");
        } else {
            localStorage.setItem('selectseats',this.selected)
            let data = { 'seats': this.selected};
            this.viewCtrl.dismiss(data);
            // this.navCtrl.push(SeatslayoutPage,this.detail)
        }    
    }

    selectedcolor(h) {
        console.log(h);
        this.selected=h;
    }

    close() {
        this.viewCtrl.dismiss();
    }
}
