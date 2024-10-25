import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import your AppRoutingModule
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// Import other components as needed

@NgModule({
    declarations: [
        AppComponent,  // Ensure AppComponent is declared
        HomeComponent,
        ContactComponent,
        NavBarComponent,        // Declare NavBarComponent
        HeroSectionComponent,   // Declare HeroSectionComponent
        ServicesComponent,      // Declare ServicesComponent
        TestimonialComponent,   // Declare TestimonialComponent
        OurStoryComponent,      // Declare OurStoryComponent
        WhyChooseUsComponent,   // Declare WhyChooseUsComponent
        CaseStudiesComponent,    // Declare CaseStudiesComponent
        FooterComponent         // Declare FooterComponent
        // Declare other components here...
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule ,
        ReactiveFormsModule,
        MatIconModule,
        RouterModule.forRoot([]) // Add RouterModule here with an empty route array or your routes
      ],
    providers: [
    provideAnimationsAsync()
  ],
    bootstrap: [AppComponent] // Bootstrap the AppComponent
})
export class AppModule { }

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { HomeComponent } from './component/home/home.component';
// import { NavBarComponent } from './component/nav-bar/nav-bar.component';
// import { HeroSectionComponent } from './component/hero-section/hero-section.component';
// import { ServicesComponent } from './component/services/services.component';
// import { TestimonialComponent } from './component/testimonial/testimonial.component';
// import { OurStoryComponent } from './component/our-story/our-story.component';
// import { WhyChooseUsComponent } from './component/why-choose-us/why-choose-us.component';
// import { CaseStudiesComponent } from './component/case-studies/case-studies.component';
// import { FooterComponent } from './component/footer/footer.component';
// import { AppRoutingModule } from './app-routing.module'; // If you have routing

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,          // Declare HomeComponent
//     NavBarComponent,        // Declare NavBarComponent
//     HeroSectionComponent,   // Declare HeroSectionComponent
//     ServicesComponent,      // Declare ServicesComponent
//     TestimonialComponent,   // Declare TestimonialComponent
//     OurStoryComponent,      // Declare OurStoryComponent
//     WhyChooseUsComponent,   // Declare WhyChooseUsComponent
//     CaseStudiesComponent,    // Declare CaseStudiesComponent
//     FooterComponent         // Declare FooterComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule        // Include AppRoutingModule if applicable
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
