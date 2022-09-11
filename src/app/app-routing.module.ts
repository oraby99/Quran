import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurahPageComponent } from './components/surah-page/surah-page.component';

const routes: Routes = [
  {
    path: 'surah',
    children: [
      {
        path: ':number',
        component: SurahPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
