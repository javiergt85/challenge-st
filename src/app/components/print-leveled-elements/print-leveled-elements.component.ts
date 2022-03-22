import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-leveled-elements',
  templateUrl: './print-leveled-elements.component.html',
  styleUrls: ['./print-leveled-elements.component.scss']
})
export class PrintLeveledElementsComponent implements OnInit {

  elements = [
    {
      'name': 'A_Element'
    },
    {
      'name': 'B_Element',
      'children': [
        {
          'name': 'B.1_Element',
          'children': [
            {
              'name': 'B.1.1_Element'
            },
            {
              'name': 'B.1.2_Element',
              'children': [
                {
                  'name': 'B.1.2.1_Element'
                },
                {
                  'name': 'B.1.2.2_Element'
                }
              ]
            }
          ]
        },
        {
          'name': 'B.2_Element'
        }
      ]
    },
    {
      'name': 'C_Element',
      'children': [
        {
          'name': 'C.1_Element'
        },
        {
          'name': 'C.2_Element'
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
