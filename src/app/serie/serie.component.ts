import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  series: Array<Serie> = [];
  prom: Number = 0
  constructor() { }
    getSerieList(): Array<Serie> {
      return dataSeries;
    }
    mostrarPromedio(series: Array<Serie>):Number
    {
    let prom: number = 0;
    for(let index = 0; index < series.length; index++)
    {
        let serieAct: Serie = series[index];
        prom += serieAct.seasons;
    }
    prom = prom/series.length;
    return prom
  }
    ngOnInit() {
      this.series = this.getSerieList();
      this.prom = this.mostrarPromedio(this.getSerieList());

    }



}
