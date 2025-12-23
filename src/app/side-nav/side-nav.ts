import { Component } from '@angular/core';
import { ChartColumnDecreasing,User, LucideAngularModule, CircleUserRound, Settings } from 'lucide-angular';

@Component({
  selector: 'app-side-nav',
  imports: [LucideAngularModule],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.css',
})
export class SideNav {
  readonly ChartColumnDecreasing = ChartColumnDecreasing;
  readonly CircleUserRound = CircleUserRound;
  readonly Settings = Settings
}
