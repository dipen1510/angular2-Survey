import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {DemoService} from './demo.service';

import {Observable} from 'rxjs/Rx';
import { Survey }           from './survey';
import 'rxjs/add/operator/map';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  
})
export class AppComponent implements OnInit{
  title = 'SURVEY SCHEDULER LIST';
  public survey;
  

  constructor(private _demoService: DemoService) {
    }
 surveys: Survey[];
  ngOnInit() {
   this.getSurveys();
  }

  getSurveys() {
    this._demoService.getSurvey().subscribe(
      // the first argument is a function which runs on success
      surveys => { this.surveys = surveys},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading surveys')
    );
  }
 
}