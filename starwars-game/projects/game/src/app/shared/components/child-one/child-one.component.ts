import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../features/user/services/profile.service';

@Component({
  selector: 'game-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  displayKey = ''

  constructor(private profileService: ProfileService) {
    this.displayKey = this.profileService.displayKey.toString()
  }

  ngOnInit() {
  }

}
