import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuranComponent } from './components/quran/quran.component';

const routes: Routes = 
[
{
  path: "quran" , component:QuranComponent,

} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
