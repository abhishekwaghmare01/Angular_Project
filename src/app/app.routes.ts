import { Routes } from '@angular/router';
import { HomeComponent } from './navigation/home/home.component';
import { ServicesComponent } from './navigation/services/services.component';
import { ProductsComponent } from './navigation/products/products.component';
import { AboutComponent } from './navigation/about/about.component';
import { ContactComponent } from './navigation/contact/contact.component';
import { HtmlComponent } from './strip/html/html.component';
import { CssComponent } from './strip/css/css.component';
import { JavascriptComponent } from './strip/javascript/javascript.component';
import { SqlComponent } from './strip/sql/sql.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'services', component:ServicesComponent},
    {path:'products', component:ProductsComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component: ContactComponent},
    {path:'html', component:HtmlComponent},
    {path:'css', component:CssComponent},
    {path:'js', component:JavascriptComponent},
    {path:'sql', component:SqlComponent}
];
