import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SurahService } from 'src/app/services/surah.service';

@Component({
  selector: 'app-surah-page',
  templateUrl: './surah-page.component.html',
  styleUrls: ['./surah-page.component.scss']
})
export class SurahPageComponent implements OnInit {

  constructor(private surahService : SurahService
    ,private http : HttpClient
    ) { }

  ngOnInit(): void {
    this.http.get('/hizbQuarter/1/en.asad').subscribe(res => {
      console.log(res);
    })

  }

}
