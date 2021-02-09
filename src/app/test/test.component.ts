import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
declare var jQuery:any;
import{FormBuilder}from '@angular/forms';
import { TemplateRef } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-test',
  templateUrl:'./test.component.html',
  styleUrls: ['./test.component.css'] 
  
})
export class TestComponent implements OnInit {
  title='User App';

  public name:string;
  public email:string;
  public pnumber:number;
  public password:string;

  public rows:Array<{name:string,email:string,pnumber:number,password:string}>=[];
  buttonClicked(){
     this.rows.push({name: this.name,email:this.email,pnumber:this.pnumber,password:this.password} );
  }

  constructor() { }

  ngOnInit(): void {
   
    
  }

}
