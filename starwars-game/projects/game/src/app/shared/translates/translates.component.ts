import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'game-translates',
  templateUrl: './translates.component.html',
  styleUrls: ['./translates.component.css']
})
export class TranslatesComponent implements OnInit {
  public language: string[] = ['fr', 'en']

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  changeLanguage(langue: string) {
    this.translateService.use(langue)
  }

}
