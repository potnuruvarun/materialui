import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/Services/service.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor(private services: ServiceService,private route:Router) { }
  newform:any;
  // username:any;
  // password:any;
  Form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  submit(input:any) {
  console.log(input)
    this.services.login(this.Form.value).subscribe(res => {
      if(this.Form.valid)
      {
        this.route.navigate(['alldata'])

      }
      console.log("response", res);
    });


  }

  

}
