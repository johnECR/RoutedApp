import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  studCollection: Array<object> = [];
  studRecord: {studnum: number, firstname: string, lastname: string, prog: string, year:number};

  constructor() { }

  addNewStud(SNum: number, FName: string, LName: string, Prog: string, Year:number){
    this.studRecord = {
      studnum: SNum,
      firstname: FName,
      lastname: LName,
      prog: Prog,
      year: Year
    }
    this.studCollection.push(this.studRecord);
  }

  getStud(){
    return this.studCollection;
  }

}