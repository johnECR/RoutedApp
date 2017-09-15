import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  studColl: Array<object> = [];
  studObj: {studnum: number, firstname: string, lastname: string, prog: string, year:number};

  constructor() { }

  addNewStud(SNum: number, FName: string, LName: string, SProg: string, SYear:number){
    this.studObj = {
      studnum: SNum,
      firstname: FName,
      lastname: LName,
      prog: SProg,
      year: SYear
    }
    this.studColl.push(this.studObj);
  }

  getStud(){
    return this.studColl;
  }

}