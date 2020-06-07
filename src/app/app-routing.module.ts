import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'resume',
    component:ResumeComponent
  },
  {
    path:'home',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
