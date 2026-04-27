import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Product } from './component/product/product';
import { ProductInfo } from './component/home-child/product-info/product-info';
import { ProfileInfo } from './component/home-child/profile-info/profile-info';
import { Feedback } from './component/home-child/feedback/feedback';
import { Electronics } from './component/electronics/electronics';
import { About } from './component/about/about';
import { ErrorPages } from './component/error-pages/error-pages';


export const routes: Routes = [
    {path:"", component:Home , children:[
        {path:"pageInfo" , component:ProductInfo},
        {path:"profile" , component:ProfileInfo},
        {path:"feedback" , component:Feedback},
    ]},
    {path:"product", component:Product},
    {path:"electronics", component:Electronics},
    {path:"about", component:About},
    {path:"**", component:ErrorPages},
]

/*
RouterLink
RouterOutlet
RouterLink-active
RouterLinkactiveoption
*/