import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  studCollection: Array<object>;

  constructor(private dataStore: CommonService) { }

  ngOnInit() {
    this.studCollection = this.dataStore.getStud();
  }

}