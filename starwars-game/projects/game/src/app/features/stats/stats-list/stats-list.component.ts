import { Component, OnInit } from '@angular/core';
import { Stat, StatistiqueService } from '../services/statistique.service';

@Component({
  selector: 'game-stats-list',
  templateUrl: './stats-list.component.html',
  styleUrls: ['./stats-list.component.css']
})
export class StatsListComponent implements OnInit {
  public datas: Stat[] = []

  constructor(private statsService: StatistiqueService) { }

  ngOnInit(): void {
    this.statsService.getAll().subscribe(item => {
      this.datas = item
    })
  }

}
