import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Components[] = [
    {
      icon: 'American-Football',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'American-Football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'American-Football',
      name: 'avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'American-Football',
      name: 'botones',
      redirectTo: '/botones'
    },
     {
      icon: 'card',
      name: 'Card',
      redirectTo: '/card'
    },
    {
      icon: 'American-Football',
      name: 'CheckBox',
      redirectTo: '/check'
    },
    {
      icon: 'American-Football',
      name: 'dateTime',
      redirectTo: '/date-time'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
interface Components {
  icon: string;
  name: string;
  redirectTo: string;
}
