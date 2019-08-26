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
  getgender='';
  getdistrict='';
  getplace='';
  getmobile='';
  getemail='';
  getuname='';
  getpass1='';
  getpass2='';

  onSubmit(data:NgForm){
    console.log(data.value);

    this.getpass1=data.value.pass1;
    console.log(data.value.pass1);

this.getpass2=data.value.pass2;
    console.log(data.value.pass2);

if ( (this.getpass1=data.value.pass1)===(this.getpass2=data.value.pass2)) {

  console.log('password matches');
} 


else {
  console.log('incorrect password');
}



  }

  constructor() { }

  ngOnInit() {
  }

}
