import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../features/user/services/profile.service';

@Component({
  selector: 'game-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.css'],
  providers: [ProfileService]
})
export class TestOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
