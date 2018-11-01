import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BookingTicketPage } from '../booking-ticket/booking-ticket';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
 
  movie_name: any;
  name: any;
  type: any;
  img: any;
  a: any;
  b: any;
  c: any;
  d: any;
  e: any;
  f: any;
  g: any;
  h: any;
  i: any;
  j: any;
  k: any;
  l:any;
  m:any;
  n:any;
  o:any;
  p:any;
  disc: any;

  movie_detail: any;
  MovieCertificationName: any;
  MovieName: any;
  Certification: any;
  MovieLanguage: any;
  MovieGenre: any;
 

   

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.a= " Rahul Mithaiwala is an orphaned bachelor living in Mumbai.Raised by his grandparents from the age of eight, Rahuls grandfather owns a chain of confectionery shops. Before his grandfathers 100th-birthday celebration, two of Rahuls friends invite him to accompany them on a vacation in Goa, which he accepts.  Rahuls grandfather dies on the eve of the celebration, just when he witnesses Sachin Tendulkar on TV in a cricket match get dismissed on his 99th run. His grandmother tells Rahul that his grandfather wanted his ashes to be divided into two parts—one of each to be immersed in the Ganga and Rameswaram.She asks Rahul to take the ashes to Rameswaram and disperse them. Reluctantly, he accepts her request but is also eager to attend the Goa trip."
      this.b= "( lit. Youngest lion) is a 2018 Indian Tamil-language comedy-drama film written and directed by Pandiraj and produced by Suriya for, his studio 2D Entertainment. The film stars Karthi and Sayyeshaa in the lead roles, with a supporting cast including Sathyaraj,Priya Bhavani Shankar and Arthana Binu.The breach had come to light after Suriya had uploaded a video of him and his son visiting the shoot location in Karaikudi.Rajasekar Pandian, a manager of 2D Entertainment, later said that the team got the required permission from the District Collector of Pudukottai,who permitted the president of the Rekla Federation of Tamil Nadu to conduct the race. So, the makers chose to use the opportunity of the race to include such scenes of rekla racing in the film"
      this.c= "Eventually, as Deepak had predicted to the women, a series of threats arise from Rajveer’s friend Ankit (Vijay Varma), who pushes for revenge. The threats result in Andrea being stalked and Falak losing her job. They are discouraged by a police officer from filing a complaint stating it would make their daily lives more miserable unless they relocate to another town or city. In reality, the local police are aware that the young men are well connected and are backed-up by Rajveer’s uncle Ranjit, a powerful influential politician from South Delhi.."
      this.d= "the (IMF), attempt to retrieve the CIA non-official cover (NOC) list from the American embassy in Prague.Their mission fails: Phelps is shot, his wife Claire dies in a car bombing, and the rest of the team except Ethan Hunt are eliminated by unknown assassins. Meeting with IMF director Eugene Kittridge, Hunt reveals his awareness of a second IMF team sent to monitor them, and learns the job was a setup to lure out a mole within IMF, who is believed to be working with an arms dealer known as Max as part ofJob 314 As Hunt is the only member left, Kittridge suspects him of being the mole, and Hunt flees.and warns her that the list she possesses has a tracking device. He promises to deliver the real list in return for $10 million and Job's identity. Hunt, Max, and her agents escape just as a CIA team arrives."
      this.e= "Halfway through the construction process, rival gangsters under the control of Kores Botha, an international terrorist with ties to many major crime syndicates, decide to use their control of construction crews working on the skyscraper to extort millions of dollars in shakedown payments for preventing a massive strike of construction workers, potentially halting its progress. Zhao agrees to the shakedown amounts, but not without carefully tracking and recording Botha's international money laundering scheme in his attempt to legitimize the funds he has extorted. Zhao believes that the memory card they have created containing the money laundering tracking information on Botha will provide them with insurance against any attempt by Botha to extort money from them a second time. Botha learns of the existence of the memory card and makes it a personal priority to retrieve the memory card in order to destroy it and the incriminating information it contains, because his bosses will kill him if he doesnt."
     
      this.f= " Then, Shiva finds out that P has fixed a bomb somewhere. By the clues given by P's henchman Wasim Khan (O.A.K.Sundar). Shiva finds that P has fixed a bomb in a bus. Then he comes to know that P has fixed the bomb such that if the bus is driven less or more than 5km/h, it will blast. However, Shiva saves the people inside the bus. Wasim Khan was killed by Ritika , P's henchwoman. Shiva then discovers that there was someone in the department who is informing P about their ideas. He then discovers that it was Inbashekhar (Nizhalgal Ravi) and kills him. Shiva gets suspended for killing him."
      this.g= "Junga starts to tell his story. Back in Pollachi, Junga is working as a bus conducter and is in love with Thoppuli (Madonna Sebastian). He gets involved in a fight which angers his mother (Saranya Ponvannan) as his father Ranga and his grandfather Linga were dons and squandered all their wealth. They also lost their theatre Cinema Paradise and had to sell it to Kumarasamy Chettiyar (Suresh Chandra Menon). So his mother fears that he will follow his father and grandfather and become a don. But Junga tells his mother that he will not be a don like Ranga and Linga and will get retrieve their ownership of the theatre. He goes to Chennai with Yo Yo (Yogi Babu) and becomes a misery don and starts saving money towards his goal. He also leaves Thoppuli as she wants him to give her a luxurious life. She says that she hopes he will gift her 365 sarees for every day of the year. Junga runs away from the relationship. One day, he comes to know that the theatre is being brought down and Chettiar is planning to sell it to a foreign company. So, he goes to Chettiyar's house and gives him one crore to buy back his theatre. But Chettiyaar insults him. Junga challenges Cheetiyar."
      this.h= "Interestingly the film doesn’t give details about its director. Story, screenplay and dialogue writer turned director-actor Amberdeep Singh who has earlier worked with Amrinder and Karaj in their previous films and also helped Ashke’s team says, “We are not telling director’s name as it is a surprise for all. Film’s trailer will come out in a few days and then everyone will get to know about it. It is a contemporary story that will revolve around Bhangra.”"
      this.i= "The team signed actress Nayanthara to play the lead role in the project, as Gnanamuthu was looking for a strong female protagonist, and after hearing the script, the actress immediately agreed to be a part of the venture. She's playing as elder sister of Atharvaa.[8] For a further role, the team were on the lookout for a pan-Indian actor considering Prabhu Deva, Gautham Menon and Anurag Kashyap for the character and the latter was signed to do antagonist's role. The voice for Anurag was dubbe by director Magizh Thirumeni.[9] Raashi Khanna was also signed on to portray another character in the film, appearing as Atharvaa's love interest and it has been confirmed that Vijay Sethupathi will be seen playing 15-minute extended cameo role as Nayanthara's husband."
      this.j= "Devayani began her career as Koyal in the Hindi film Koyal, which was later cancelled during its production stage.[12] She appeared in a Bengali film Shaat Ponchomi.She also acted in a Marathi film before debuting and rising to fame in Tamil cinema. Her earliest films were released in the early and middle 90's including Kadhal Kottai.From 1996 to 2000, Devyani acted as heroine in over 35 films and acted alongside all the top actors such as Kamal Hassan (Thenali, Panchathantiram), Prashanth (Appu), Ajith (Kadhal Kottai), Vijay (Friends), Vikram (Vinnukkum Mannukkum), Sarath Kumar (Suryavamsam), Parthiban (Azhagi). She moved into supporting roles in Thenali though she still acted commercially until 2004–2005.Kadaikutty Singam  lit. Youngest lion is a 2018 Indian Tamil-language comedy-drama film written and directed by Pandiraj and produced by Suriya for, his studio 2D Entertainment. The film stars Karthi and Sayyeshaa in the lead roles, with a supporting cast including Sathyaraj,Priya Bhavani Shankar and Arthana Binu.The breach had come to light after Suriya had uploaded a video of him and his son visiting the shoot location in Karaikudi.Rajasekar Pandian, a manager of 2D Entertainment, later said that the team got the required permission from the District Collector of Pudukottai,who permitted the president of the Rekla Federation of Tamil Nadu to conduct the race. So, the makers chose to use the opportunity of the race to include such scenes of rekla racing in the film."
      
      this.k= "In July 2017, Lyca Productions announced that they would be making a film starring Nayanthara in the lead role, which would be directed by Nelson Dilipkumar. Nelson had previously worked as a creative director with the television channel Star Vijay, as well as completing half the shoot of a project titled Vettai Mannan starring Silambarasan, Deeksha Seth and Hansika Motwani, which ran into production trouble.[1] Described as a dark comedy, the makers held discussions with Saranya Ponvannan and Yogi Babu in July 2017 to cast them in key roles. Anirudh Ravichander was signed up to compose the film's score and soundtrack."
      this.l= " The film opens in a rundown pigeon shop in New York City where an old man feeds them. He then sends one pigeon away. It flies high and lands in a skyscraper off the office window of a psychologist who is conducting a session with her client Nirupama (Pooja Kumar), a nuclear oncologist, who begins to confide that hers was a marriage of convenience that provided a safe haven for pursuing her PhD in the U.S.A. for past three years and that her husband Vishwanath alias Viz (Kamal Haasan) is a middle-aged Kathak teacher. She is also put off by Viz's effeminate bearing and is attracted to her boss, Deepankar (Samrat Chakrabarti). Doubting whether her husband has secrets of his own, she hires a private investigator to tail him to probe grounds for divorce. She learns from the private investigator that Viz is a Muslim. "
      this.m= "The film was announced as a romantic comedy to be directed by Elan, who debuted with Graghanam with Harish Kalyan and Raiza Wilson chosen to play the lead roles. The lead pair had risen to fame following their appearances on Star Vijay's reality television show Bigg Boss hosted by Kamal Haasan.[3][4] While Harish was selected to portray an innocent middle-class boy, Raiza was auditioned alongside over thirty other actresses, before the team chose her to portray an outgoing girl."
      this.n= "Jonas Taylor, a rescue diver, attempts to save a group of scientists in a nuclear submarine. As Taylor is rescuing the last survivor, he sees the hull of the submarine being rammed in by an unknown giant creature. When he returns to the rescue vessel, two of his crew are stuck in the damaged submarine but Taylor leaves anyway, realizing that attempting rescue would result in the death of everyone. Moments after leaving in the rescue submarine, the damaged sub is destroyed in an explosion. Taylor's account of the story stating that a giant sea creature was the cause of the disaster was dismissed by Dr. Heller who believed that Taylor was affected by pressure-induced psychosis."
      this.o= "The commercial success of Enthiran (2010) prompted the makers of the film to immediately consider making a sequel. By March 2011, the original film's cinematographer, Rathnavelu, revealed that initial pre-production work on a sequel had begun with the same technical team.[21][22] S. Shankar, the director of Enthiran, moved on to work on Nanban (2012) and I (2015) and planned to reunite with the same producers as the original was released, with Shankar revealing that he was unsure if the film will happen at allduring an interview in 2014.[23] While finishing the production of I, Shankar drafted the scripts of three more feature films, including a sequel to Enthiran."
      this.p= "The team signed actress Nayanthara to play the lead role in the project, as Gnanamuthu was looking for a strong female protagonist, and after hearing the script, the actress immediately agreed to be a part of the venture. Shes playing as elder sister of Atharvaa. For a further role, the team were on the lookout for a pan-Indian actor considering Prabhu Deva, Gautham Menon and Anurag Kashyap for the character and the latter was signed to do antagonists role. The voice for Anurag was dubbe by director Magizh Thirumeni. Raashi Khanna was also signed on to portray another character in the film, appearing as Atharvaas love interest and it has been confirmed that Vijay Sethupathi will be seen playing 15-minute extended cameo role as Nayanthara's husband."

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');

    // this.img=this.navParams.get('img')
    // this.name=this.navParams.get('name')
    // this.movie_name=this.navParams.get('movie_name')
    // this.type=this.navParams.get('type')
   
    //  this.movie_detail=this.navParams.get('movie_detail')
    // this.img=this.navParams.get('img')
    // this.movie_name=this.navParams.get('movie_name')
    // this.MovieCertificationName=this.navParams.get('MovieCertificationName')
    // this.MovieLanguage=this.navParams.get('MovieLanguage')
    // this.MovieGenre=this.navParams.get('MovieGenre')

    // this.movie_img2=this.navParams.get('image2')
    // this.movie_img3=this.navParams.get('image3')
    // this.movie_img4=this.navParams.get('image4')
    // this.movie_img5=this.navParams.get('image5')
    // this.movie_img6=this.navParams.get('image6')
    // this.movie_img7=this.navParams.get('image7')
    // this.movie_img8=this.navParams.get('image8')

    // console.log(this.img)
    // console.log(this.movie_name)
    // console.log(this.name)
    // console.log(this.type)

    // console.log(this.img)
    // console.log(this.movie_name)
    // console.log(this.name)
    // console.log(this.type)
    // console.log(this.movie_detail)
  }

    ionViewWillEnter(){

      this.movie_detail=this.navParams.get('movie_detail')
      console.log(this.movie_detail)
      
      this.MovieName=this.movie_detail.MovieName
      this.img=this.movie_detail.MovieImagePath
      this.Certification=this.movie_detail.MovieCertificationName
      this.MovieLanguage=this.movie_detail.MovieLanguage
      this.MovieGenre=this.movie_detail.MovieGenre
      this.getDiscription()
    }

    getDiscription(){
      console.log('this.getDiscription')
      let x = Math.floor((Math.random() * 10) + 1);
      console.log(x)
      if(x==1){
        // return 'a'
        this.disc= this.a
      }
      if(x==2){
        this.disc= this.b
      }
      if(x==3){
        this.disc= this.c
      }
      if(x==4){
        this.disc= this.d
      }
      if(x==5){
        this.disc= this.e
      }
      if(x==6){
        this.disc= this.f
      }
      if(x==7){
        this.disc= this.g
      }
      if(x==8){
        this.disc= this.h
      }
      if(x==9){
        this.disc= this.i
      }
      if(x==10){
        this.disc= this.j
      }
      if(x==11){
        this.disc= this.k
      }     
      if(x==12){
        this.disc= this.l
      }     
      if(x==13){
        this.disc= this.m
      }     
      if(x==14){
        this.disc= this.n
      }     
      if(x==15){
        this.disc= this.o
      }      
      if(x==16){
        this.disc= this.p
      }         
    }
  
  submit(){
    this.navCtrl.setRoot(HomePage)
  }

  booking(){
    console.log( this.movie_detail)
    var params={
      movie_detail:this.movie_detail
    }
    console.log(this.img,this.MovieName,this.Certification,this.MovieLanguage,this.MovieGenre)
    // this.navCtrl.push(BookingTicketPage,{img:this.img,movie_name:this.movie_name,name:this.name,type:this.type})
    this.navCtrl.push(BookingTicketPage,params)
  }
}
