import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from 'src/app/user/user.component';

import { AppComponent } from 'src/app/app.component';

const routes: Routes =[
    { path :'', redirectTo:'/appComponent', pathMatch: 'full' },
    { path: 'appComponent', component: AppComponent },
    { path: 'userComponent', component: UserComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
