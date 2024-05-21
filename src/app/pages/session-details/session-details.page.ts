import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.page.html',
  styleUrls: ['./session-details.page.scss'],
})
export class SessionDetailsPage implements OnInit {
  
  session: any;

  sessionArray: any[] = [
    {
      id: 1,
      img: 'assets/images/calm-session.png',
      name: 'Calm',
      title: 'Through calmness find deeply restful sleep',
      desc: 'This session encourages you to rediscover a sense of deep inner calmness, and through this the open space of rest, relaxation and sleep. Remind yourself of your natural capabilities to be calm, let go of what you can set aside, and simply create the opportunity for sleep to emerge.',
    },
    {
      id: 2,
      img: 'assets/images/float-session.png',
      name: 'Float',
      title: 'Float away to the comfort of sleep',
      desc: 'In this session you can simply allow yourself to float on the hypnotic experience to find a different sense of transitioning towards relaxation, peace & comfort. The simple art of letting go will allow you to rediscover so many pleasurable things about drifting off to sleep.',
    },
    {
      id: 3,
      img: 'assets/images/beach-session.png',
      name: 'Beach',
      title: 'Reflections on the beach soundscape to help you sleep',
      desc: 'Enjoy the meditations of the beach to help you create deep relaxation. The calming sounds of the beach are the basis for introducing short meditations that deeply absorb you and shift your attention to that special place and encourage relaxation and sleep.',
    },
    {
      id: 4,
      img: 'assets/images/peace-session.png',
      name: 'Inner Peace',
      title: 'Rediscover a mindset of deep inner peace',
      desc: 'A deeply absorbing mindset reset session, using the power of hypnotic induction to help you rediscover a sense of deep inner peace, and to set this as a part of your natural baseline. This session is both deeply relaxing and also empowers long term change towards using your natural capability to develop peace, relaxation and easy sleep whenever you wish.',
    },
  ];

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private router: Router, private modalController: ModalController) {}

  ngOnInit() {
    const sessionId = +this.route.snapshot.paramMap.get('id')!;
    this.session = this.sessionArray.find(
      (session) => session.id === sessionId
    );
  }

  goBack() {
    this.navCtrl.back();
  }

  navigateAndCloseModal(path: string) {
    this.modalController.dismiss();
    this.router.navigate([path]);
  }

}
