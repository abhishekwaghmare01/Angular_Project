import { Routes } from '@angular/router';
import { HomeComponent } from './navigation/home/home.component';
import { ServicesComponent } from './navigation/services/services.component';
import { ProductsComponent } from './navigation/products/products.component';
import { AboutComponent } from './navigation/about/about.component';
import { ContactComponent } from './navigation/contact/contact.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'services', component:ServicesComponent},
    {path:'products', component:ProductsComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component: ContactComponent}
];
