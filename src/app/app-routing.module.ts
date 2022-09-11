import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuranComponent } from './components/quran/quran.component';
import { SurahPageComponent } from './components/surah-page/surah-page.component';

const routes: Routes = [
  {
    path: 'quran',
    component: QuranComponent,
  },
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
