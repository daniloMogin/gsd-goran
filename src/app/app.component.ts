import { Component, OnInit } from '@angular/core';
import { environment as env } from './../environments/environment';

import { NguCarousel } from '@ngu/carousel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';
    screenWidth: number;
    year = new Date().getFullYear();
    version = env.version;
    // logo = require('./../assets/img/Preloader_3.gif');
    navigation = [
        { link: 'about', label: 'O Nama', ngClass: '' },
        { link: 'projects', label: 'Projekti', ngClass: '' },
        { link: 'retail', label: 'Maloprodaja', ngClass: '' },
        { link: 'contact', label: 'Kontakt', ngClass: '' }
    ];
    navigationSideMenu = [...this.navigation];

    public carouselOne: NguCarousel;

    constructor() {
        console.log(`App Component!`);
        console.log(env);
    }
    ngOnInit() {
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
        };
    }

    public myfunc(event: Event) {
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
        console.log(`myfunc`);
        console.log(event);
    }
}
