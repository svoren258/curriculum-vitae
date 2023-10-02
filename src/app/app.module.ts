import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { HeroComponent } from '../components/hero/hero.component';
import { IntroductionComponent } from '../components/introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactsComponent,
    HeroComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
