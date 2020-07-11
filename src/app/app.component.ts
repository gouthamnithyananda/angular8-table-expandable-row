import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  expand:boolean=false;
  expandedEmpName:string;
  title = 'angular8-table-expandable-row';
  employees=[{
    "name":"John",
    "city":"Bengaluru",
    "description":"John is an Engineer"
  },
  {
    "name":"Ganesh",
    "city":"Bengaluru",
    "description":"Ganesh is an yoga instructor"
  },
  {
    "name":"Larry",
    "city":"Bengaluru",
    "description":"Larry is an home gaurd"
  },
  {
    "name":"Rama",
    "city":"Bengaluru",
    "description":"Rama is an plumber"
  },
  {
    "name":"Ravi",
    "city":"Bengaluru",
    "description":"Ravi is an Actor"
  },
  {
    "name":"Suresh",
    "city":"Bengaluru",
    "description":"Suresh is an carpentor"
  },
  {
    "name":"Babu",
    "city":"Bengaluru",
    "description":"Babu is an farmer"
  },{
    "name":"Ajay",
    "city":"Bengaluru",
    "description":"Ajay is an Bank manager"
  },
  {
    "name":"Deepak",
    "city":"Bengaluru",
    "description":"Deepak is an Blogger"
  },
  {
    "name":"Prashanth",
    "city":"Bengaluru",
    "description":"Prashanth is an Banker"
  },{
    "name":"Nikhil",
    "city":"Bengaluru",
    "description":"Nikhil is an Politician"
  },
  {
    "name":"Sushma",
    "city":"Bengaluru",
    "description":"Sushma is an Actress"
  },
  {
    "name":"Sowmya",
    "city":"Bengaluru",
    "description":"Sowmya is an Politician"
  }
  ];

  expandrow(val){
    this.expand=!this.expand;
    this.expandedEmpName=val.name;
    if(!this.expand){
      this.expandedEmpName=null;
    }
  }
}
