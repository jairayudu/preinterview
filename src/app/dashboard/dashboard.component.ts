import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Designation!: string;
  Username!: string;
  NoOfTeamMembers!: number;
  TotalCostOfAllProjects!: number;
  PendingTasks!: number;
  UpComingProjects!: number;
  ProjectCost!: number;

  CurrentExpenditure!: number;
  AvailableFunds!: Number;

  Clients!: string[];
  Projects!: string[];
  Years: number[] = [];
  TeamMembersSummary!: any[];
  TeamMembers!: any[];

  ngOnInit(): void {
    this.Designation = 'Team leader';
    this.Username = 'John Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;

    this.Clients = [
      'ABC Infotech Ltd.',
      'DEF Software Solutions',
      'GHI Industries',
    ];
    this.Projects = ['Project A', 'Project B', 'Project C', 'Project D'];
    for (var i = 2023; i >= 2014; i--) {
      this.Years.push(i);
    }
    this.TeamMembersSummary = [
      {
        Region: 'East',
        TeamMembersCount: 20,
        TemporarilyUnavailableMembers: 4,
      },
      {
        Region: 'West',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 8,
      },
      {
        Region: 'South',
        TeamMembersCount: 17,
        TemporarilyUnavailableMembers: 1,
      },
      {
        Region: 'North',
        TeamMembersCount: 15,
        TemporarilyUnavailableMembers: 6,
      },
    ];

    this.TeamMembers = [
      {
        Region: 'East',
        Members: [
          { ID: 1, name: 'Ford', Status: 'Available' },
          { ID: 2, name: 'Miller', Status: 'Available' },
          { ID: 3, name: 'Jones', Status: 'Busy' },
          { ID: 4, name: 'James', Status: 'Busy' },
        ],
      },
      {
        Region: 'West',
        Members: [
          { ID: 5, name: 'Anna', Status: 'Available' },
          { ID: 6, name: 'Arun', Status: 'Available' },
          { ID: 7, name: 'Varun', Status: 'Busy' },
          { ID: 8, name: 'Jasmine', Status: 'Busy' },
        ],
      },
      {
        Region: 'South',
        Members: [
          { ID: 9, name: 'Krishna', Status: 'Available' },
          { ID: 10, name: 'Mohan', Status: 'Available' },
          { ID: 11, name: 'Raju', Status: 'Busy' },
          { ID: 12, name: 'Farooq', Status: 'Busy' },
        ],
      },
      {
        Region: 'North',
        Members: [
          { ID: 13, name: 'Jacob', Status: 'Available' },
          { ID: 14, name: 'Smith', Status: 'Available' },
          { ID: 15, name: 'Jones', Status: 'Busy' },
          { ID: 16, name: 'James', Status: 'Busy' },
        ],
      },
    ];
  }
  onProjectChange($event: any) {
    //$EVENT CONSISTS OF EVENT PARAMETERS THAT CAN BE ACCESSED TO HANDLE DOM MANIPULATIONS
    if ($event.target.innerHTML.trim() == 'Project A') {
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52436;
    } else if ($event.target.innerHTML.trim() == 'Project B') {
      this.ProjectCost = 88923;
      this.CurrentExpenditure = 22450;
      this.AvailableFunds = 2640;
    } else if ($event.target.innerHTML.trim() == 'Project C') {
      this.ProjectCost = 662183;
      this.CurrentExpenditure = 7721;
      this.AvailableFunds = 9811;
    } else if ($event.target.innerHTML.trim() == 'Project D') {
      this.ProjectCost = 928431;
      this.CurrentExpenditure = 562;
      this.AvailableFunds = 883;
    }
  }
}
