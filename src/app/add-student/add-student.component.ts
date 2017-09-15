import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private dataStore: CommonService) { }

  ngOnInit() {
  }

  onSubmit(nameForm){
    this.dataStore.addNewStud(nameForm.value.num,
      nameForm.value.fname,
      nameForm.value.lname,
      nameForm.value.prog
      , nameForm.value.yr)
    nameForm.reset();
  }

}