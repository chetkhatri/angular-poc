import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { HeaderComponent } from './header/header.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';


const appRoutes:Routes = [
  {
    path:'',
    component: HeaderComponent 
  },
  {
    path:'add',
    component: AddComponent 
  },
  {
    path:'view',
    component: ViewComponent 
  },
  {
    path:'delete',
    component: DeleteComponent 
  },
  {
    path:'search',
    component: SearchComponent 
  },
  {
    //Wildcard Route
    path:'**',
    component:NotfoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NotfoundComponent,
    AddComponent,
    ViewComponent,
    HeaderComponent,
    DeleteComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,
    { enableTracing: true }),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
