import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DataBindingsComponent } from './components/data-bindings/data-bindings.component';
import { DataBindingsLatestComponent } from './components/data-bindings-latest/data-bindings-latest.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},

    {path: 'about', component: AboutComponent},
    {path: 'contact-us', component: ContactUsComponent},

    {path: 'data-bindings', component: DataBindingsComponent},
    {path: 'data-bindings-latest', component: DataBindingsLatestComponent},
    {path: '**', redirectTo: 'home' }
];
