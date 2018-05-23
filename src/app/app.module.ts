import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { NguCarouselModule } from '@ngu/carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatGridListModule
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
        NguCarouselModule,
        FlexLayoutModule,

        MatButtonModule,
        MatToolbarModule,
        MatSelectModule,
        MatTabsModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatChipsModule,
        MatCardModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatListModule,
        MatMenuModule,
        MatIconModule,
        MatTooltipModule,
        MatGridListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
