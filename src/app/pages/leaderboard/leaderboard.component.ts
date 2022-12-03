import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  isCollapsed = true;
  models = [
      {
          name: 'Humans',
          Difficult_Distractors: '90',
          Random_Distractors: ''
      },
      {
        name: 'ViT',
        Difficult_Distractors: '50.3',
        Random_Distractors: '86',
      },
      {
          name: 'Swin',
          Difficult_Distractors: '52.9',
          Random_Distractors: '86',
      },
      {
          name: 'DEiT',
          Difficult_Distractors: '47.2',
          Random_Distractors: '77.7',
      },
      {
          name: 'ConvNeXt',
          Difficult_Distractors: '51.2',
          Random_Distractors: '79',
      },
  ].sort((a,b) => Number(b.Difficult_Distractors) - Number(a.Difficult_Distractors))

  ngOnInit(): void {
  }

}
