import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  swiperModules = [IonicSlides];

  selectedCategory: string = 'induction';
  
  inductionArray: any[] = [
    {
      id: 1,
      img: 'assets/images/induction-1.png',
      name: 'Calm',
      desc: 'Through calmness find deeply restful sleep',
    },
    {
      id: 2,
      img: 'assets/images/induction-2.png',
      name: 'Float',
      desc: 'Float away to the comfort of sleep',
      lock: 'assets/icon/lock.png',
    },
    {
      img: 'assets/images/induction-3.png',
      name: 'Lullaby',
      desc: 'Explore the lullaby of your natural rhythms find the song of sleep',
      lock: 'assets/icon/lock.png',
    },
    {
      img: 'assets/images/induction-4.png',
      name: 'Memory',
      desc: 'Remember and forget, all things that will make sleep easy',
      lock: 'assets/icon/lock.png',
    },
    {
      img: 'assets/images/induction-5.png',
      name: 'Peace',
      desc: 'Through the idea of peace, sleep is just a moment away',
      lock: 'assets/icon/lock.png',
    },
    {
      img: 'assets/images/induction-6.png',
      name: 'Relax',
      desc: 'You are invited to relax, so deeply into sleep',
      lock: 'assets/icon/lock.png',
    },
  ];

  soundScapeArray: any[] = [
    {
      id: 3,
      img: 'assets/images/soundscape-1.png',
      name: 'Beach',
      desc: 'Reflections on the beach soundscape to help you sleep',
    },
    {
      img: 'assets/images/soundscape-2.png',
      name: 'River',
      desc: 'Reflections on the river soundscape to help you sleep',
      lock: 'assets/icon/lock.png',
    },
    {
      img: 'assets/images/soundscape-3.png',
      name: 'Forest',
      desc: 'Reflections on the forest soundscape to help you sleep',
      lock: 'assets/icon/lock.png',
    },
    {
      img: 'assets/images/soundscape-4.png',
      name: 'White Noise',
      desc: 'Reflections on the white noise soundscape to help you sleep',
      lock: 'assets/icon/lock.png',
    },
  ];

  mindsetArray: any[] = [
    {
      id: 4,
      img: 'assets/images/mindset-1.png',
      name: 'Inner Peace',
      desc: 'Rediscover a mindset of deep inner peace',
    },
    {
      img: 'assets/images/mindset-2.png',
      name: 'Synchronicity',
      desc: 'Tune your mindset back to its natural rhythms of relaxation',
      lock: 'assets/icon/lock.png',
    },
    {
      img: 'assets/images/mindset-3.png',
      name: 'Smooth',
      desc: 'Smooth the ripples in your thinking to create a mindset primed for sleep',
      lock: 'assets/icon/lock.png',
    },
    {
      img: 'assets/images/mindset-4.png',
      name: 'Timeless',
      desc: 'Your ability to sleep is timeless when mindset is reset to find it',
      lock: 'assets/icon/lock.png',
    },
  ];

  meditationArray: any[] = [
    {
      img: 'assets/images/meditation-1.png',
      name: 'Beach Meditation',
      desc: 'Sounds of beach soundscape meditation',
    },
    {
      img: 'assets/images/meditation-2.png',
      name: 'River Meditation',
      desc: 'The peaceful soundscape meditation of the river',
      lock: 'assets/icon/lock.png',
    },
    {
      img: 'assets/images/meditation-3.png',
      name: 'Forest Meditation',
      desc: 'Natural forest soundscape meditation',
      lock: 'assets/icon/lock.png',
    },
    {
      img: 'assets/images/meditation-4.png',
      name: 'White Noise Meditation',
      desc: 'A relaxing white noise meditation',
      lock: 'assets/icon/lock.png',
    },
  ];

  constructor(private router: Router) {}

  openSessionDetails(sessionId: number) {
    this.router.navigate(['/session-details', sessionId]);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

}
