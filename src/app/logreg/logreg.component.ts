import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {
  
  getname='';
  getaddress='';
  getplace='';
  getmobile='';
  getemail='';
  getuname='';
  getpass1='';
  getpass2='';

  onSubmit(data:NgForm){
    console.log(data.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
