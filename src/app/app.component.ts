import { Component } from '@angular/core';
import { from } from 'rxjs';
import{FormsModule}from'@angular/forms';
import{ConfigService}from './config.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'User App';
  constructor(private api:ConfigService )
  {

  }
  ngOnInit()
  {
    this.api.apiCall().subscribe((data)=>{
      console.warn("Get API Data",data);
    })
  }
}


