import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';



const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
 {path:'order', component: OrderComponent},
 {path:'dialog-box', component: DialogBoxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
